/* eslint-env jest */
// @ts-ignore ambiguous import
import take from "./take.ts";

describe("take", () => {
  it("takes up to given number of elements", () => {
    expect(take(3)([5, 1, 3, 9])).toEqual([5, 1, 3]);
  });

  it("takes no more when there is not enough elements", () => {
    expect(take(10)([5, 1, 3, 9])).toEqual([5, 1, 3, 9]);
  });

  it("takes no elements when given empty array", () => {
    expect(take(2)([])).toEqual([]);
  });
});
