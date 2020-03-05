/* eslint-env jest */
// @ts-ignore ambiguous import
import string from "./string.ts";

describe("string", () => {
  it("checks if the given value is a string", () => {
    expect(string("test")).toBe(true);
    expect(string("")).toBe(true);

    expect(string(undefined)).toBe(false);
    expect(string(null)).toBe(false);
    expect(string(false)).toBe(false);
    expect(string(0)).toBe(false);

    expect(string({})).toBe(false);
    expect(string([])).toBe(false);
    expect(string(NaN)).toBe(false);
    expect(string(() => {})).toBe(false);

    expect(string([1, 2, 3])).toBe(false);
    expect(string({ a: 1, b: 2, c: 3 })).toBe(false);
    expect(string(17.6)).toBe(false);
    expect(string(Math.min)).toBe(false);
  });
});
