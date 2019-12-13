/* eslint-env jest */
// @ts-ignore ambiguous import
import difference from "./difference.ts";

describe("difference", () => {
  it("skips all the elements present in the second array and keeps the rest", () => {
    expect(difference([1, 2, 3, 4, 5, 6], [2, 4])).toEqual([1, 3, 5, 6]);
  });
});
