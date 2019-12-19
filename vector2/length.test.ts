/* eslint-env jest */
// @ts-ignore ambiguous import
import length from "./length.ts";

describe("length", () => {
  it("calculates the length of the given vector", () => {
    const expectedLength = Math.sqrt(3 * 3 + 5 * 5);

    expect(length([3, 5])).toBe(expectedLength);
  });

  it("is always positive", () => {
    const expectedLength = Math.sqrt(-3 * -3 + -5 * -5);

    expect(length([-3, -5])).toBe(expectedLength);
  });
});
