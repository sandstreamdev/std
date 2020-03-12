/* eslint-env jest */
// @ts-ignore ambiguous import
import daysInYear from "./daysInYear.ts";

describe("daysInYear", () => {
  it("should handle common years", () => {
    const years = [2017, 2018, 2019, 2022, 2023];

    years.forEach(year => {
      expect(daysInYear(year)).toBe(365);
    });
  });

  it("should handle leap years", () => {
    const years = [2016, 2020, 2048];

    years.forEach(year => {
      expect(daysInYear(year)).toBe(366);
    });
  });
});
