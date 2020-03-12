/* eslint-env jest */
// @ts-ignore ambiguous import
import toISOFromLocalDateTime from "./toISOFromLocalDateTime.ts";

describe("toISOFromLocalDateTime", () => {
  it("converts local date time into UTC ISO date time string and keeps the original time", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(toISOFromLocalDateTime(a)).toEqual("2019-02-15T12:00:00.000Z");
    expect(toISOFromLocalDateTime(b)).toEqual("2019-02-23T23:30:00.000Z");
    expect(toISOFromLocalDateTime(c)).toEqual("2019-02-24T01:12:34.000Z");
  });
});
