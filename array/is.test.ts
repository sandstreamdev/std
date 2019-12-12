/* eslint-env jest */
// @ts-ignore ambiguous import
import is from "./is.ts";

describe("is", () => {
  it("checks is the given argument is an array", () => {
    expect(is([1, 2, 3])).toBe(true);
    expect(is([])).toBe(true);
    expect(is(null)).toBe(false);
    expect(is(undefined)).toBe(false);
    expect(is({ a: 5 })).toBe(false);
    expect(is({})).toBe(false);
    expect(is(5)).toBe(false);
    expect(is(0)).toBe(false);
    expect(is("test")).toBe(false);
    expect(is("")).toBe(false);
  });
});
