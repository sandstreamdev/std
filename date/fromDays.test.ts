/* eslint-env jest */
// @ts-ignore ambiguous import
import fromDays from "./fromDays.ts";

describe("fromDays", () => {
  it("converts given day count to milliseconds", () => {
    expect(fromDays(1)).toEqual(86400000);
  });

  it("should handle sub-day resolution", () => {
    expect(fromDays(0.5)).toEqual(43200000);
  });

  it("should handle over 24h resolution", () => {
    expect(fromDays(2.5)).toEqual(216000000);
  });
});
