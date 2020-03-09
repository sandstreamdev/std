/* eslint-env jest */
// @ts-ignore ambiguous import
import pop from "./pop";

describe("pop", () => {
  it("returns the given array without the last element", () => {
    expect(pop([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  it("returns an empty array when the given array was empty", () => {
    expect(pop([])).toEqual([]);
  });
});
