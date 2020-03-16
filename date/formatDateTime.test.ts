/* eslint-env jest */
// @ts-ignore ambiguous import
import formatDateTime from "./formatDateTime.ts";

describe("formatDateTime", () => {
  it("formats a given date as a simple YYYY-MM-DD HH:MM(:SS) string", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatDateTime(a)).toEqual("2019-02-15 12:00");
    expect(formatDateTime(b)).toEqual("2019-02-23 23:30");
    expect(formatDateTime(c)).toEqual("2019-02-24 01:12");
  });

  it("should include seconds display if enabled", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:59");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatDateTime(a, true)).toEqual("2019-02-15 12:00:00");
    expect(formatDateTime(b, true)).toEqual("2019-02-23 23:30:59");
    expect(formatDateTime(c, true)).toEqual("2019-02-24 01:12:34");
  });

  it("does not include seconds display by default", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatDateTime(a)).toEqual(formatDateTime(a, false));
    expect(formatDateTime(b)).toEqual(formatDateTime(b, false));
    expect(formatDateTime(c)).toEqual(formatDateTime(c, false));
  });
});
