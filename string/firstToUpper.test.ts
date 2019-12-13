/* eslint-env jest */
// @ts-ignore ambiguous import
import firstToUpper from "./firstToUpper.ts";

describe("firstToUpper", () => {
  it("transforms the first character to lowercase", () => {
    expect(firstToUpper("the quick brown fox jumps over the lazy dog")).toBe(
      "The quick brown fox jumps over the lazy dog"
    );
  });

  it("transforms only the first character", () => {
    expect(firstToUpper("the doors")).toBe("The doors");
  });

  it("supports empty string", () => {
    expect(firstToUpper("")).toBe("");
  });
});
