/* eslint-env jest */
// @ts-ignore ambiguous import
import average from "./average.ts";

describe("average", () => {
  it("returns average for the given data", () => {
    expect(average([1, 11, 54, 13, 93, 54, 7, 30, 96, 15])).toBe(374 / 10);
  });

  it("returns the element itself for single element arrays", () => {
    expect(average([93])).toBe(93);
  });

  it("returns 0 for empty arrays", () => {
    expect(average([])).toBe(0);
  });

  it("returns 0 for falsy argument", () => {
    expect(average(null)).toBe(0);
    expect(average(undefined)).toBe(0);
  });
});
