/* eslint-env jest */
// @ts-ignore ambiguous import
import length from "./length.ts";

describe("length", () => {
  it("returns the number of entries within given object", () => {
    expect(length({ a: 1, b: 2, c: 3 })).toBe(3);
  });

  it("skips symbols", () => {
    const symbol = Symbol("test");

    expect(length({ a: 1, b: 2, c: 3, [symbol]: true })).toBe(3);
    expect(length({ a: 1, b: 2, c: 3 })).toBe(3);
  });
});
