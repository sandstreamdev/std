/* eslint-env jest */
// @ts-ignore ambiguous import
import valid from "./valid.ts";

describe("valid", () => {
  it("checks if the given date is valid", () => {
    expect(valid(new Date())).toBe(true);
    expect(valid(new Date("2020-01-31T09:52:31.618Z"))).toBe(true);
    expect(valid(new Date("2020-01-42T09:52:31.618Z"))).toBe(false);
  });

  it("should reject Invalid Date objects", () => {
    expect(valid(new Date("test"))).toBe(false);
    expect(valid(new Date("77724e10-2ffa-45cc-b05d-a91a846a6080"))).toBe(false);
  });

  it("handles missing and falsy values", () => {
    expect(valid(undefined)).toBe(false);
    expect(valid(null)).toBe(false);
    expect(valid(false)).toBe(false);
    expect(valid(0)).toBe(false);
    expect(valid(NaN)).toBe(false);
    expect(valid("")).toBe(false);
  });
});
