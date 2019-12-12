/* eslint-env jest */
// @ts-ignore ambiguous import
import shift from "./shift.ts";

describe("shift", () => {
  it("shifts to the left and creates a cycle", () => {
    expect(shift(1)([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
    expect(shift(2)([1, 2, 3, 4, 5])).toEqual([3, 4, 5, 1, 2]);
    expect(shift(3)([1, 2, 3, 4, 5])).toEqual([4, 5, 1, 2, 3]);
  });

  it("does nothing for the shift of 0", () => {
    expect(shift(0)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("does nothing for the shift being multiple of the given array's length", () => {
    expect(shift(5)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(shift(10)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(shift(15)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
