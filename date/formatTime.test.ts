import formatTime from "./formatTime.js";

describe("formatTime", () => {
  it("formats a given date as a simple HH:MM(:SS) string", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatTime(a)).toEqual("12:00");
    expect(formatTime(b)).toEqual("23:30");
    expect(formatTime(c)).toEqual("01:12");
  });

  it("includes seconds display when enabled", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatTime(a, true)).toEqual("12:00:00");
    expect(formatTime(b, true)).toEqual("23:30:00");
    expect(formatTime(c, true)).toEqual("01:12:34");
  });

  it("does not include seconds display by default", () => {
    const a = new Date("2019-02-15T12:00:00");
    const b = new Date("2019-02-23T23:30:00");
    const c = new Date("2019-02-24T01:12:34");

    expect(formatTime(a)).toEqual(formatTime(a, false));
    expect(formatTime(b)).toEqual(formatTime(b, false));
    expect(formatTime(c)).toEqual(formatTime(c, false));
  });
});
