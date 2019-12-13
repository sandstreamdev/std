/* eslint-env jest */
// @ts-ignore ambiguous import
import daysInMonths from "./daysInMonths.ts";

describe("daysInMonths", () => {
  it("returns number of days in a months in a leap year", () => {
    const leapYear = true;

    const numberOfDaysInMonthsInLeapYear = [
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
    ];

    expect(daysInMonths(leapYear)).toEqual(numberOfDaysInMonthsInLeapYear);
  });

  it("returns number of days in a months in a year", () => {
    const leapYear = false;

    const numberOfDaysInMonths = [
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
    ];

    expect(daysInMonths(leapYear)).toEqual(numberOfDaysInMonths);
  });
});
