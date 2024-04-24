import startOfDay from "./startOfDay.js";
import fromMinutes from "./fromMinutes.js";

describe("startOfDay", () => {
  it("returns a local Date of a start of the day at a particular Date", () => {
    const date = new Date("2019-01-01T13:54:33.232Z");

    const timezoneOffset = date.getTimezoneOffset();
    const timezoneOffsetDuration = fromMinutes(timezoneOffset);

    const midnightIso = new Date("2019-01-01T00:00:00.000Z");
    const expected = new Date(midnightIso.valueOf() + timezoneOffsetDuration);

    expect(startOfDay(date)).toEqual(expected);
  });
});
