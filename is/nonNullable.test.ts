/* eslint-env jest */
// @ts-ignore ambiguous import
import nonNullable from "./nonNullable.ts";

describe("nonNullable", () => {
  it("checks and asserts the given value is not null or undefined", () => {
    expect(nonNullable(undefined)).toBe(false);
    expect(nonNullable(null)).toBe(false);

    expect(nonNullable(false)).toBe(true);
    expect(nonNullable(0)).toBe(true);
    expect(nonNullable("")).toBe(true);

    expect(nonNullable({})).toBe(true);
    expect(nonNullable([])).toBe(true);
    expect(nonNullable(NaN)).toBe(true);
    expect(nonNullable(() => {})).toBe(true);

    expect(nonNullable("test")).toBe(true);
    expect(nonNullable([1, 2, 3])).toBe(true);
    expect(nonNullable({ a: 1, b: 2, c: 3 })).toBe(true);
    expect(nonNullable(17.6)).toBe(true);
    expect(nonNullable(Math.min)).toBe(true);
  });
});
