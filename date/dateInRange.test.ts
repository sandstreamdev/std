/* eslint-env jest */
// @ts-ignore ambiguous import
import dateInRange from "./dateInRange.ts";

describe("dateInRange", () => {
  it("provided date is within the day range", () => {
    const startRangeDate = new Date("2019-05-28T12:00:00");
    const endRangeDate = new Date("2019-05-29T12:00:00");
    const dateToCheck = new Date("2019-05-28T24:00:00");

    expect(dateInRange(startRangeDate, endRangeDate)(dateToCheck)).toEqual(
      true
    );
  });

  it("provided date is not within the year range", () => {
    const startRangeDate = new Date("2018-05-28T12:00:00");
    const endRangeDate = new Date("2019-05-29T12:00:00");
    const dateToCheck = new Date("2017-05-28T24:00:00");

    expect(dateInRange(startRangeDate, endRangeDate)(dateToCheck)).toEqual(
      false
    );
  });
});
