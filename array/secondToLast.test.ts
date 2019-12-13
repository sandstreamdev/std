/* eslint-env jest */
// @ts-ignore ambiguous import
import secondToLast from "./secondToLast.ts";

describe("secondToLast", () => {
  it("returns the second to last element of the given array when there are at least two elements", () => {
    expect(secondToLast([1, 2, 3, 4, 5])).toBe(4);
  });

  it("returns undefined when there are less than two elements", () => {
    expect(secondToLast([])).toBe(undefined);
    expect(secondToLast([1])).toBe(undefined);
  });
});
