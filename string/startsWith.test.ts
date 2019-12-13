/* eslint-env jest */
// @ts-ignore ambiguous import
import startsWith from "./startsWith.ts";

const text = "The quick brown fox jumps over the lazy dog";

describe("startsWith", () => {
  it("is case sensitive", () => {
    expect(startsWith("the")(text)).toBe(false);
    expect(startsWith("The")(text)).toBe(true);
  });

  it("starts with itself", () => {
    expect(startsWith(text)(text)).toBe(true);
  });
});
