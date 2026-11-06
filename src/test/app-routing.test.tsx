import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Proof and journal routes", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  it.each([
    ["/journal/authority-before-action", "/journal_/authority-before-action"],
    ["/journal/runbooks-as-architecture", "/journal_/$slug"],
  ])("matches %s as its own page", (path, id) => {
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(id);
  });
});
