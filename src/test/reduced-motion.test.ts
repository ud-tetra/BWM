import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(resolve(__dirname, "../styles.css"), "utf8");
const block = css.match(/@media \(prefers-reduced-motion: reduce\) \{([\s\S]*?)\n\}/)?.[1] ?? "";

describe("reduced motion", () => {
  it("forces auto scroll behavior", () => {
    expect(block).toMatch(/html\s*\{\s*scroll-behavior:\s*auto\s*!important/);
  });
  it("keeps rise-animated content visible", () => {
    expect(block).toMatch(/\.animate-rise\s*\{[^}]*opacity:\s*1\s*!important/);
  });
  it("has no leftover proof-sheet print rules", () => {
    expect(css).not.toContain("proof-sheet");
  });
});
