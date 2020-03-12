/* eslint-env jest */
// @ts-ignore ambiguous import
import daysInMonths from "./daysInMonths.ts";

describe("daysInMonths", () => {
  it("should handle common years", () => {
    const commonYearMonthDays = daysInMonths(false);

    expect(commonYearMonthDays).toEqual([
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ]);
  });

  it("should handle leap years", () => {
    const leapYearMonthDays = daysInMonths(true);

    expect(leapYearMonthDays).toEqual([
      31,
      29,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ]);
  });
});
