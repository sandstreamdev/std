/* eslint-env jest */
// @ts-ignore ambiguous import
import endOfDay from "./endOfDay.ts";
// @ts-ignore ambiguous import
import fromMinutes from "./fromMinutes.ts";

describe("endOfDay", () => {
  it("returns a local Date of an end of the day at a particular Date", () => {
    const date = new Date("2018-12-31T13:54:33.232Z");

    const timezoneOffset = date.getTimezoneOffset();
    const timezoneOffsetDuration = fromMinutes(timezoneOffset);

    const midnightIso = new Date("2019-01-01T00:00:00.000Z");
    const expected = new Date(midnightIso.valueOf() + timezoneOffsetDuration);

    expect(endOfDay(date)).toEqual(expected);
  });
});
