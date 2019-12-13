/* eslint-env jest */
// @ts-ignore ambiguous import
import monthNames from "./monthNames.ts";

describe("monthNames", () => {
  it("Returns all month names", () => {
    const allMonthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    expect(monthNames()).toEqual(allMonthNames);
  });
});
