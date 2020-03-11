/* eslint-env jest */
// @ts-ignore ambiguous import
import length from "./length";

describe("length", () => {
  it("returns the length of the given array", () => {
    expect(length([1, 2, 3])).toEqual(3);
    expect(length([6, 7])).toEqual(2);
    expect(length([])).toEqual(0);
  });
});
