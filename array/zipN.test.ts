import zipN from "./zipN.js";

describe("zip", () => {
  it("should zip with pair constructor", () => {
    expect(zipN([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should zip up to the left arrays length", () => {
    expect(zipN([1, 2, 3, 4, 5, 7], [4, 5, 6])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
      [4, undefined],
      [5, undefined],
      [7, undefined]
    ]);

    expect(zipN([1, 2, 3], [4, 5, 6, 4, 5, 7])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should return the wrapped elements of the source array when only one array is given", () => {
    expect(zipN([1, 2])).toEqual([[1], [2]]);
  });

  it("should return an empty array when the given array is empty", () => {
    expect(zipN([])).toEqual([]);
  });

  it("should return an empty array when the given nothing", () => {
    expect(zipN()).toEqual([]);
  });

  it("should zip three arrays with the same lengths", () => {
    expect(zipN([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  it("should zip three arrays with different lengths", () => {
    expect(zipN([1, 2, 3], [4, 5, 6], [7, 8])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, undefined]
    ]);

    expect(zipN([1, 2, 3], [4, 5], [7, 8, 9])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, undefined, 9]
    ]);

    expect(zipN([1, 2], [4, 5, 6], [7, 8, 9])).toEqual([
      [1, 4, 7],
      [2, 5, 8]
    ]);
  });
});
