/* eslint-env jest */
// @ts-ignore ambiguous import
import standardDeviation from "./standardDeviation.ts";

describe("standardDeviation", () => {
  it("returns 0 for a list of equal elements", () => {
    expect(standardDeviation([5, 5, 5, 5, 5, 5])).toBe(0);
  });

  it("should calculate standard deviation of given data", () => {
    expect(standardDeviation([20, 31, 83, 73, 89, 90, 30, 79, 44, 73])).toBe(
      Math.sqrt(32758 / 5) / 3
    );
  });
});
