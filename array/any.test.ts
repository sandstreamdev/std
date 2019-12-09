/* eslint-env jest */
// @ts-ignore ambiguous import
import any from "./any.ts";

describe("any", () => {
  it("returns true if the array is not empty", () => {
    expect(any([1, 2])).toBe(true);
  });

  it("returns false if the array is empty", () => {
    expect(any([])).toBe(false);
  });

  it("returns false if the given argument is falsy", () => {
    expect(any(null)).toBe(false);
    expect(any(undefined)).toBe(false);
  });
});
