/* eslint-env jest */
// @ts-ignore ambiguous import
import boolean from "./boolean";

describe("boolean", () => {
  it("checks if the given value is a boolean", () => {
    expect(boolean(true)).toBe(true);
    expect(boolean(false)).toBe(true);

    expect(boolean("true")).toBe(false);
    expect(boolean("")).toBe(false);
    expect(boolean(undefined)).toBe(false);
    expect(boolean(null)).toBe(false);
    expect(boolean(0)).toBe(false);
    expect(boolean({})).toBe(false);
    expect(boolean([])).toBe(false);
    expect(boolean(NaN)).toBe(false);
    expect(boolean(() => {})).toBe(false);
    expect(boolean([1, 2, 3])).toBe(false);
    expect(boolean({ a: 1, b: 2, c: 3 })).toBe(false);
    expect(boolean(17.6)).toBe(false);
    expect(boolean(Math.min)).toBe(false);
  });
});
