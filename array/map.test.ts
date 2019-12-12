/* eslint-env jest */
// @ts-ignore ambiguous import
import map from "./map.ts";

const plusOne = (x: number) => x + 1;
const square = (x: number) => x * x;

describe("map", () => {
  it("works like Array.map for a single function", () => {
    expect(map(square)([1, 2, 3])).toEqual([1, 4, 9]);
    expect(map(plusOne)([1, 2, 3])).toEqual([2, 3, 4]);
  });

  it("supports multiple functions", () => {
    expect(map(square, plusOne)([1, 2, 3])).toEqual([2, 5, 10]);
  });
});
