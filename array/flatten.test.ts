/* eslint-env jest */
// @ts-ignore ambiguous import
import flatten from "./flatten.ts";

describe("flatten", () => {
  it("flattens one level of nested arrays", () => {
    expect(flatten([1, [2, 3], 4, [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);

    expect(flatten([1, [2, [6, 7, [8, 9]]], 4, [5, 6]])).toEqual([
      1,
      2,
      [6, 7, [8, 9]],
      4,
      5,
      6
    ]);
  });

  it("does nothing for already flat arrays", () => {
    expect(flatten([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
