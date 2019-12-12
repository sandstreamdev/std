/* eslint-env jest */
// @ts-ignore ambiguous import
import zip from "./zip.ts";

describe("zip", () => {
  it("zips with pair constructor", () => {
    expect(zip([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("zips up to the left arrays length", () => {
    expect(zip([1, 2, 3, 4, 5, 7], [4, 5, 6])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
      [4, undefined],
      [5, undefined],
      [7, undefined]
    ]);

    expect(zip([1, 2, 3], [4, 5, 6, 4, 5, 7])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });
});
