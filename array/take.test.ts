/* eslint-env jest */
// @ts-ignore ambiguous import
import take from "./take.ts";

describe("take", () => {
  it("takes the given count of elements", () => {
    expect(take(0)([1, 2, 3, 4, 5])).toEqual([]);
    expect(take(1)([1, 2, 3, 4, 5])).toEqual([1]);
    expect(take(2)([1, 2, 3, 4, 5])).toEqual([1, 2]);
    expect(take(3)([1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
  });
});
