/* eslint-env jest */
// @ts-ignore ambiguous import
import zipN from "./zipN.ts";

describe("zip", () => {
  it("should zips with pair constructor", () => {
    expect(zipN([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should zips up to the left arrays length", () => {
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

  it("should zips three arrays with the same lengths", () => {
    expect(zipN([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  it("should zips three arrays with different lengths", () => {
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
