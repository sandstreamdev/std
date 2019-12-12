/* eslint-env jest */
// @ts-ignore ambiguous import
import dateDiff from "./dateDiff.ts";

describe("dateDiff", () => {
  it("returns the difference of 24 hours in miliseconds", () => {
    const firstDate = new Date("2019-12-18T12:00:00");
    const secondDate = new Date("2019-12-17T12:00:00");

    const dayInMiliseconds = 86400000;

    expect(dateDiff(firstDate, secondDate)).toEqual(dayInMiliseconds);
  });

  it("returns 0 difference of eqact same dates", () => {
    const firstDate = new Date("2019-10-10T10:00:00");
    const secondDate = new Date("2019-10-10T10:00:00");

    const noDifference = 0;

    expect(dateDiff(firstDate, secondDate)).toEqual(noDifference);
  });
});
