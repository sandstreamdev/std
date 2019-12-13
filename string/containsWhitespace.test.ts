/* eslint-env jest */
// @ts-ignore ambiguous import
import containsWhitespace from "./containsWhitespace.ts";

describe("containsWhitespace", () => {
  it("detects whitespace", () => {
    expect(containsWhitespace("test string")).toBe(true);
    expect(containsWhitespace("  pre")).toBe(true);
    expect(containsWhitespace("post ")).toBe(true);
    expect(containsWhitespace("test\n")).toBe(true);
    expect(containsWhitespace("test\tstring")).toBe(true);
    expect(containsWhitespace("test")).toBe(false);
  });
});
