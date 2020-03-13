/* eslint-env jest */
// @ts-ignore ambiguous import
import toDays from "./toDays.ts";

describe("toDays", () => {
  it("converts milliseconds into days", () => {
    expect(toDays(86400000)).toEqual(1);
  });

  it("should handle sub-day resolution", () => {
    expect(toDays(43200000)).toEqual(0.5);
  });

  it("should handle over 24h resolution", () => {
    expect(toDays(216000000)).toEqual(2.5);
  });
});
