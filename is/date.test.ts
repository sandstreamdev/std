/* eslint-env jest */
// @ts-ignore ambiguous import
import date from "./date.ts";

describe("date", () => {
  it("checks if the given value is a Date object", () => {
    const a = new Date("2019-12-13T12:15:00.000Z");

    expect(date(a)).toBe(true);
    expect(date(null)).toBe(false);
    expect(date(undefined)).toBe(false);
    expect(date({ value: Date.now() })).toBe(false);
    expect(date([])).toBe(false);
  });

  it("handles current date constructor", () => {
    expect(date(new Date())).toBe(true);
    expect(date(Date.now())).toBe(false);
  });
});
