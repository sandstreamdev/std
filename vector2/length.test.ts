/* eslint-env jest */
// @ts-ignore ambiguous import
import length from "./length.ts";

describe("length", () => {
  it("calculates the length of the given vector", () => {
    expect(length([3, 5])).toBe(Math.sqrt(3 ** 2 + 5 ** 2));
    expect(length([-3, -5])).toBe(Math.sqrt((-3) ** 2 + (-5) ** 2));
  });
});
