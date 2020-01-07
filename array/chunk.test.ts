/* eslint-env jest */
// @ts-ignore ambiguous import
import chunk from "./chunk.ts";

describe("chunk", () => {
  it("returns a list of tuples if chunk size is equal 2 and number of elements in the array is even", () => {
    expect(chunk(2)(["a", "b", "c", "d"])).toEqual([
      ["a", "b"],
      ["c", "d"]
    ]);
  });

  it("returns a list of n-element arrays if number of elements in the array is not a multiple of chunk size then the last array contains remaining elements from source array", () => {
    expect(chunk(3)(["a", "b", "c", "d"])).toEqual([["a", "b", "c"], ["d"]]);
    expect(chunk(4)(["a", "b", "c", "d"])).toEqual([["a", "b", "c", "d"]]);
    expect(chunk(1)(["a", "b", "c", "d"])).toEqual([
      ["a"],
      ["b"],
      ["c"],
      ["d"]
    ]);
  });

  it("returns a list with empty arrays if chunk size is equal zero", () => {
    expect(chunk(0)(["a", "b", "c", "d"])).toEqual([[], [], [], []]);
  });

  it("returns a empty list if source array is empty", () => {
    expect(chunk(2)([])).toEqual([]);
  });
});
