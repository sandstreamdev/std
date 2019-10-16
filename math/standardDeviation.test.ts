/* eslint-env jest */
// @ts-ignore ambiguous import
import standardDeviation from "./standardDeviation.ts";

describe("average", () => {
  it("returns 0 for a list of equal elements", () => {
    expect(standardDeviation([5, 5, 5, 5, 5, 5])).toBe(0);
  });
});
