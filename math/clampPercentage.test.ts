/* eslint-env jest */
// @ts-ignore ambiguous import
import clampPercentage from "./clampPercentage.ts";

describe("clampPercentage", () => {
  it("does nothing when the value is in range", () => {
    expect(clampPercentage(50)).toBe(50);
  });

  it("clamps to the min value when out of bound from the left", () => {
    expect(clampPercentage(-50)).toBe(0);
  });

  it("clamps to the max value when out of bound from the right", () => {
    expect(clampPercentage(150)).toBe(100);
  });

  it("is inclusive", () => {
    expect(clampPercentage(0)).toBe(0);
    expect(clampPercentage(100)).toBe(100);
  });
});
