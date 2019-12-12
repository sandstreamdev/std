/* eslint-env jest */
// @ts-ignore ambiguous import
import midpoint from "./midpoint.ts";

describe("midpoint", () => {
  it("returns the middle element when the number of elements is odd", () => {
    expect(midpoint([1, 2, 3, 4, 5])).toBe(3);
  });

  it("returns the right element when the number of elements is even", () => {
    expect(midpoint([1, 2, 3, 4])).toBe(3);
  });

  it("returns undefined for empty arrays", () => {
    expect(midpoint([])).toBe(undefined);
  });

  it("returns the only element for singleton arrays", () => {
    expect(midpoint([1])).toBe(1);
  });
});
