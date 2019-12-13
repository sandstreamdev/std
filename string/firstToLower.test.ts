/* eslint-env jest */
// @ts-ignore ambiguous import
import firstToLower from "./firstToLower.ts";

describe("firstToLower", () => {
  it("transforms the first character to lowercase", () => {
    expect(firstToLower("The quick brown fox jumps over the lazy dog")).toBe(
      "the quick brown fox jumps over the lazy dog"
    );
  });

  it("transforms only the first character", () => {
    expect(firstToLower("THE DOORS")).toBe("tHE DOORS");
  });

  it("supports empty string", () => {
    expect(firstToLower("")).toBe("");
  });
});
