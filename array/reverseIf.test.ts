/* eslint-env jest */
// @ts-ignore ambiguous import
import reverseIf from "./reverseIf.ts";

describe("reverseIf", () => {
  it("reverses the given array when enabled", () => {
    expect(reverseIf(true)([10, -5])).toEqual([-5, 10]);
  });

  it("does nothing when disabled", () => {
    expect(reverseIf(false)([10, -5])).toEqual([10, -5]);
  });
});
