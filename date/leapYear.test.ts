/* eslint-env jest */
// @ts-ignore ambiguous import
import leapYear from "./leapYear.ts";

describe("leapYear", () => {
  it("should detect leap years", () => {
    const years = [2016, 2020, 2048];

    years.forEach(year => {
      expect(leapYear(year)).toBe(true);
    });
  });

  it("should not detect common years", () => {
    const years = [2017, 2018, 2019, 2022, 2023];

    years.forEach(year => {
      expect(leapYear(year)).toBe(false);
    });
  });
});
