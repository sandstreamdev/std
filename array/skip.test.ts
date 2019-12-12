/* eslint-env jest */
// @ts-ignore ambiguous import
import skip from "./skip.ts";

describe("skip", () => {
  it("skips the given count of elements", () => {
    expect(skip(0)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(skip(1)([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(skip(2)([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
    expect(skip(3)([1, 2, 3, 4, 5])).toEqual([4, 5]);
  });
});
