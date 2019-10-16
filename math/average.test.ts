/* eslint-env jest */
// @ts-ignore ambiguous import
import average from "./average.ts";

describe("average", () => {
  it("returns an average of given elements", () => {
    expect(average([5, 1, 3, 9])).toBe(4.5);
  });

  it("returns 0 for an empty list", () => {
    expect(average([])).toBe(0);
  });
});
