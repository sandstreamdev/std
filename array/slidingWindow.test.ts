import slidingWindow from "./slidingWindow.js";

describe("slidingWindow", () => {
  it("should return an array of pairs of consecutive elements for sliding window length of 2", () => {
    expect(slidingWindow(2)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ]);
  });

  it("should return an array composed of triples of consecutive elements for sliding window length of 3", () => {
    expect(slidingWindow(3)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6]
    ]);
  });

  it("should return an array composed of quadruples of consecutive elements for sliding window length of 4", () => {
    expect(slidingWindow(4)([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6]
    ]);
  });

  it("should return a wrapped array when sliding window size is equal to length of the given array", () => {
    expect(slidingWindow(6)([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it("should return an array of wrapped values in arrays when sliding window length is 1", () => {
    expect(slidingWindow(1)([1, 2, 3, 4, 5, 6])).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
      [6]
    ]);
  });

  it("should return an empty array when sliding window size is greater than length of the given array", () => {
    expect(slidingWindow(3)([])).toEqual([]);
  });

  it("should return an empty array when sliding window size is less than or equal to zero", () => {
    expect(slidingWindow(0)([1, 2, 3])).toEqual([]);
    expect(slidingWindow(-1)([1, 2, 3])).toEqual([]);
  });
});
