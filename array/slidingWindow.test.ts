/* eslint-env jest */
// @ts-ignore ambiguous import
import slidingWindow from "./slidingWindow.ts";

describe("slidingWindow", () => {
  it("should return list, composed of 2-tuples of consecutive elements", () => {
    expect(slidingWindow(2)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ]);
  });

  it("should return list, composed of 3-tuples of consecutive elements", () => {
    expect(slidingWindow(3)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6]
    ]);
  });

  it("should return list, composed of 4-tuples of consecutive elements", () => {
    expect(slidingWindow(4)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6]
    ]);
  });

  it("should return a wrapped array if the window size is equal to length of the array given as an argument", () => {
    expect(slidingWindow(6)([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it("should return array of wrapped values in arrays", () => {
    expect(slidingWindow(1)([1, 2, 3, 4, 5, 6])).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
      [6]
    ]);
  });

  it("should return empty list if window size is greater than length of the array given as an argument", () => {
    expect(slidingWindow(3)([])).toEqual([]);
  });

  it("should return empty list if window size is less than or equal to zero", () => {
    expect(slidingWindow(0)([1, 2, 3])).toEqual([]);
    expect(slidingWindow(-1)([1, 2, 3])).toEqual([]);
  });
});
