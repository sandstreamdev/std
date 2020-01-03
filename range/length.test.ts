/* eslint-env jest */
// @ts-ignore ambiguous import
import length from "./length.ts";

describe("length", () => {
  it("computes the signed length of the given range", () => {
    expect(length([0, 1])).toBe(1);
    expect(length([1, 0])).toBe(-1);
    expect(length([0, 0])).toBe(0);
    expect(length([5, 5])).toBe(0);
    expect(length([3, 15])).toBe(12);
  });
});
