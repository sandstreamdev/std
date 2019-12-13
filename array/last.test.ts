/* eslint-env jest */
// @ts-ignore ambiguous import
import last from "./last.ts";

describe("last", () => {
  it("returns the last element of the given array when there are any", () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it("returns undefined when the given array is empty", () => {
    expect(last([])).toBe(undefined);
  });

  it("extracts the only value from singleton arrays", () => {
    expect(last([1])).toBe(1);
  });
});
