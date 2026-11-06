import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { absoluteUrl } from "@/lib/seo";

const ORIGIN = "https://benmayes.lovable.app";
const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

type HeadOut = { meta?: Record<string, unknown>[]; links?: Record<string, unknown>[] };
async function headFor(
  routeId: string,
  params: Record<string, string> = {},
  loaderData?: unknown,
): Promise<HeadOut> {
  const r = (
    router.routesById as unknown as Record<string, { options: { head?: (a: unknown) => unknown } }>
  )[routeId];
  return ((await r?.options.head?.({ params, loaderData, matches: [], match: {} })) ??
    {}) as HeadOut;
}

describe("Retired review route", () => {
  it("no longer matches /proof (falls through to not found)", () => {
    expect(Object.keys(router.routesById)).not.toContain("/proof");
    expect(router.matchRoutes("/proof").at(-1)?.routeId).toBe(rootRouteId);
  });
});

describe("Absolute canonical and og:url", () => {
  it.each([
    ["/", "/"],
    ["/about", "/about"],
    ["/research", "/research"],
    ["/publications", "/publications"],
  ])("%s", async (id, path) => {
    const h = await headFor(id);
    expect(h.links).toContainEqual({ rel: "canonical", href: ORIGIN + path });
    expect(h.meta).toContainEqual({ property: "og:url", content: ORIGIN + path });
  });

  it("/innovation/mqm", async () => {
    const h = await headFor("/innovation/$slug", { slug: "mqm" }, { name: "MQM", summary: "s" });
    expect(h.links).toContainEqual({ rel: "canonical", href: `${ORIGIN}/innovation/mqm` });
    expect(h.meta).toContainEqual({ property: "og:url", content: `${ORIGIN}/innovation/mqm` });
  });

  it("normalizes slashes", () => {
    expect(absoluteUrl("about")).toBe(`${ORIGIN}/about`);
    expect(absoluteUrl("//a//b")).toBe(`${ORIGIN}/a/b`);
  });
});

describe("Draft and legacy pages stay noindex", () => {
  it.each(["/journal", "/journal_/authority-before-action", "/innovation/ai-governance"])(
    "%s",
    async (id) => {
      const h = await headFor(id);
      const robots = h.meta?.find((m) => m["name"] === "robots");
      expect(String(robots?.["content"]).replace(/\s/g, "")).toBe("noindex,follow");
    },
  );
});

describe("Sitemap and robots", () => {
  const xml = readFileSync(resolve(__dirname, "../../public/sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1] ?? "");

  it("lists exactly the 18 canonical indexable URLs", () => {
    const expected = [
      "/",
      "/about",
      "/expertise",
      "/expertise/exchange",
      "/expertise/identity",
      "/expertise/hybrid-cloud",
      "/expertise/systems-integration",
      "/expertise/ai-governance",
      "/work",
      "/innovation",
      "/innovation/tetra-architecture",
      "/innovation/mqm",
      "/innovation/tetraquantum",
      "/innovation/tetradec",
      "/innovation/lattix",
      "/research",
      "/publications",
      "/contact",
    ].map((p) => ORIGIN + p);
    expect(locs).toEqual(expected);
    expect(xml).not.toMatch(/lastmod|changefreq|priority/);
  });

  it("excludes proof, journal and the legacy bridge", () => {
    expect(locs.some((l) => /\/proof|\/journal|\/innovation\/ai-governance/.test(l))).toBe(false);
  });

  it("every sitemap URL matches a real route", () => {
    for (const l of locs)
      expect(router.matchRoutes(l.slice(ORIGIN.length)).at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("robots.txt has one group and an absolute sitemap", () => {
    const txt = readFileSync(resolve(__dirname, "../../public/robots.txt"), "utf8");
    expect(txt.match(/User-agent:/g)).toHaveLength(1);
    expect(txt).not.toMatch(/Disallow/);
    expect(txt).toContain(`Sitemap: ${ORIGIN}/sitemap.xml`);
  });
});

it.each(["tetra-architecture", "mqm", "tetraquantum", "tetradec", "lattix"])(
  "preserves /innovation/%s",
  (slug) => {
    expect(router.matchRoutes(`/innovation/${slug}`).at(-1)?.routeId).toBe("/innovation/$slug");
  },
);
