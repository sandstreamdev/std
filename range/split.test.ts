/* eslint-env jest */
// @ts-ignore ambiguous import
import split from "./split.ts";

describe("split", () => {
  it("splits the given range in subranges by excluding the given used ranged", () => {
    expect(
      split([
        [2, 3],
        [5, 7]
      ])([0, 10])
    ).toEqual([
      [0, 2],
      [3, 5],
      [7, 10]
    ]);
  });

  it("supports base range clipping", () => {
    expect(
      split(
        [
          [2, 3],
          [5, 7]
        ],
        [4, 9]
      )([0, 10])
    ).toEqual([
      [4, 5],
      [7, 9]
    ]);
  });

  it("supports base range clipping", () => {
    expect(
      split(
        [
          [2, 3],
          [5, 7]
        ],
        [4, 9]
      )([0, 10])
    ).toEqual([
      [4, 5],
      [7, 9]
    ]);
  });

  it("returns the original range when no used ranges are given", () => {
    expect(split()([0, 10])).toEqual([[0, 10]]);

    expect(split([])([0, 10])).toEqual([[0, 10]]);
  });

  it("skips processing when the range is empty or broken", () => {
    expect(split()([10, 10])).toEqual([]);

    expect(split([])([NaN, 10])).toEqual([]);
  });

  it("skips empty used ranges", () => {
    expect(
      split(
        [
          [1, 1],
          [2, 3],
          [5, 7]
        ],
        [4, 9]
      )([0, 10])
    ).toEqual([
      [4, 5],
      [7, 9]
    ]);
  });
});
