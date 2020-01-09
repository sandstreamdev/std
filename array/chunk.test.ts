/* eslint-env jest */
// @ts-ignore ambiguous import
import chunk from "./chunk.ts";

describe("chunk", () => {
  it("should return an array of elements split into groups the length of size", () => {
    expect(chunk(1)(["a", "b", "c", "d"])).toEqual([
      ["a"],
      ["b"],
      ["c"],
      ["d"]
    ]);
    expect(chunk(2)(["a", "b", "c", "d"])).toEqual([
      ["a", "b"],
      ["c", "d"]
    ]);
    expect(chunk(4)(["a", "b", "c", "d"])).toEqual([["a", "b", "c", "d"]]);
  });

  it("should return an array of triples when array can't be split evenly, the final chunk will be the remaining elements", () => {
    expect(chunk(3)(["a", "b", "c", "d"])).toEqual([["a", "b", "c"], ["d"]]);
  });

  it("should return an empty array when the chunk size is equal zero", () => {
    expect(chunk(0)(["a", "b", "c", "d"])).toEqual([]);
  });

  it("should return an empty array when the given array is empty", () => {
    expect(chunk(2)([])).toEqual([]);
  });
});
