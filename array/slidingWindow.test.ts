/* eslint-env jest */
// @ts-ignore ambiguous import
import slidingWindow from "./slidingWindow.ts";

describe("slidingWindow", () => {
  it("should returns list, composed of 2-tuples of consecutive elements", () => {
    expect(slidingWindow(2)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ]);
  });

  it("should returns list, composed of 3-tuples of consecutive elements", () => {
    expect(slidingWindow(3)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6]
    ]);
  });

  it("should returns list, composed of 4-tuples of consecutive elements", () => {
    expect(slidingWindow(4)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6]
    ]);
  });

  it("should returns wrapped array in array", () => {
    expect(slidingWindow(6)([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it("should returns array of wrapped values in arrays", () => {
    expect(slidingWindow(1)([1, 2, 3, 4, 5, 6])).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
      [6]
    ]);
  });

  it("should returns empty array", () => {
    expect(slidingWindow(3)([])).toEqual([]);
    expect(slidingWindow(0)([1, 2, 3])).toEqual([]);
    expect(slidingWindow(-1)([1, 2, 3])).toEqual([]);
  });
});
