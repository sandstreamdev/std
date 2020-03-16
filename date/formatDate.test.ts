/* eslint-env jest */
// @ts-ignore ambiguous import
import formatDate from "./formatDate.ts";

describe("formatDate", () => {
  it("formats a given date as a simple YYYY-MM-DD string", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatDate(a)).toEqual("2019-02-15");
    expect(formatDate(b)).toEqual("2019-02-23");
    expect(formatDate(c)).toEqual("2019-02-24");
  });
});
