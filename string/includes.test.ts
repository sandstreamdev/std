/* eslint-env jest */
// @ts-ignore ambiguous import
import includes from "./includes.ts";

const text = "The quick brown fox jumps over the lazy dog";

describe("includes", () => {
  it("searches for the given substring", () => {
    expect(includes("fox")(text)).toBe(true);
    expect(includes("brown dog")(text)).toBe(false);
  });

  it("is case sensitive", () => {
    expect(includes("Dog")(text)).toBe(false);
  });
});
