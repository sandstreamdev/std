/* eslint-env jest */
// @ts-ignore ambiguous import
import toHours from "./toHours.ts";

describe("toHours", () => {
  it("converts milliseconds into hours", () => {
    expect(toHours(3600000)).toEqual(1);
  });

  it("should handle multiple hours", () => {
    expect(toHours(10800000)).toEqual(3);
  });

  it("should handle sub-hour resolution", () => {
    expect(toHours(1800000)).toEqual(0.5);
  });

  it("should handle over 24h resolution", () => {
    expect(toHours(144900000)).toEqual(40.25);
  });
});
