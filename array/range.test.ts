/* eslint-env jest */
// @ts-ignore ambiguous import
import range from "./range.ts";

describe("range", () => {
  it("generates and array from 0 to n - 1", () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });

  it("handles empty ranges by returning an empty array", () => {
    expect(range(0)).toEqual([]);
  });

  it("throws RangeError exception for negative ranges", () => {
    expect(() => range(-3)).toThrow(RangeError);
  });
});
