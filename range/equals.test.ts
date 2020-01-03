/* eslint-env jest */
// @ts-ignore ambiguous import
import equals from "./equals.ts";

describe("equals", () => {
  it("checks if the given ranges are equal", () => {
    expect(equals([1, 2], [1, 2])).toBe(true);
    expect(equals([1, 2], [0, 2])).toBe(false);
    expect(equals([1, 2], [1, 3])).toBe(false);
    expect(equals([6, 2], [1, 2])).toBe(false);
    expect(equals([1, 7], [1, 2])).toBe(false);
    expect(equals([4, 3], [1, 2])).toBe(false);
    expect(equals([1, 2], [5, 3])).toBe(false);
    expect(equals([1, 6], [5, 3])).toBe(false);
    expect(equals([6, 2], [5, 3])).toBe(false);
  });
});
