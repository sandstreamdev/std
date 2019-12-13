/* eslint-env jest */
// @ts-ignore ambiguous import
import single from "./single.ts";

describe("single", () => {
  it("checks if the given array contains exactly one element", () => {
    expect(single([1])).toBe(true);
    expect(single([1, 2, 3])).toBe(false);
    expect(single([1, 2])).toBe(false);
    expect(single([])).toBe(false);
  });
});
