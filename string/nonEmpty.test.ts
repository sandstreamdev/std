import nonEmpty from "./nonEmpty.js";

describe("nonEmpty", () => {
  it("detects missing strings", () => {
    expect(nonEmpty()).toBe(false);
  });

  it("detects all whitespace strings", () => {
    expect(nonEmpty("   ")).toBe(false);
    expect(nonEmpty("\t")).toBe(false);
    expect(nonEmpty("\r\n")).toBe(false);
  });

  it("detects proper non-empty strings", () => {
    expect(nonEmpty("test")).toBe(true);
    expect(nonEmpty("test with spaces ")).toBe(true);
  });
});
