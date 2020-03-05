/* eslint-env jest */
// @ts-ignore ambiguous import
import object from "./object.ts";

describe("object", () => {
  it("checks if the given value is an object", () => {
    expect(object({})).toBe(true);
    expect(object({ a: 1, b: 2, c: 3 })).toBe(true);
    expect(object([])).toBe(false);
    expect(object([1, 2, 3])).toBe(false);
    expect(object("")).toBe(false);
    expect(object(5)).toBe(false);
    expect(object("test")).toBe(false);
    expect(object(new Set([1, 2, 3]))).toBe(false);
    expect(
      object(
        new Map([
          ["a", 1],
          ["b", 2],
          ["c", 3]
        ])
      )
    ).toBe(false);
  });
});
