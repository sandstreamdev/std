/* eslint-env jest */
// @ts-ignore ambiguous import
import fromHours from "./fromHours.ts";

describe("fromHours", () => {
  it("converts given hour count to milliseconds", () => {
    expect(fromHours(1)).toEqual(3600000);
  });

  it("should handle multiple hours", () => {
    expect(fromHours(3)).toEqual(10800000);
  });

  it("should handle sub-hour resolution", () => {
    expect(fromHours(0.5)).toEqual(1800000);
  });

  it("should handle over 24h resolution", () => {
    expect(fromHours(40.25)).toEqual(144900000);
  });
});
