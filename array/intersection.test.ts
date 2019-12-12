/* eslint-env jest */
// @ts-ignore ambiguous import
import intersection from "./intersection.ts";

describe("intersection", () => {
  it("finds common elements between both arrays and keeps the order of the first array without duplicates", () => {
    expect(intersection([1, 2, 3, 4, 5], [5, 5, 3, 2])).toEqual([2, 3, 5]);
  });

  it("returns an empty array for totally different arrays", () => {
    expect(intersection([1, 2, 3, 4, 5], ["a", "b", "c"])).toEqual([]);
  });
});
