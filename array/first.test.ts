/* eslint-env jest */
// @ts-ignore ambiguous import
import first from "./first.ts";

describe("first", () => {
  it("returns the first element of the given array when there are any", () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  it("returns undefined when the given array is empty", () => {
    expect(first([])).toBe(undefined);
  });

  it("extracts the only value from singleton arrays", () => {
    expect(first([1])).toBe(1);
  });
});
