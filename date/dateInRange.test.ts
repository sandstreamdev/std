/* eslint-env jest */
// @ts-ignore ambiguous import
import dateInRange from "./dateInRange.ts";

describe("dateInRange", () => {
  it("checks if the given date is between the given date range", () => {
    const from = new Date("2018-06-10T12:00:00.000Z");
    const to = new Date("2018-06-20T12:00:00.000Z");
    const date = new Date("2018-06-15T12:00:00.000Z");

    expect(dateInRange(from, to)(date)).toBe(true);
  });

  it("detects dates out of the lower bound", () => {
    const from = new Date("2018-06-10T12:00:00.000Z");
    const to = new Date("2018-06-20T12:00:00.000Z");
    const date = new Date("2018-06-05T12:00:00.000Z");

    expect(dateInRange(from, to)(date)).toBe(false);
  });

  it("detects dates out of the upper bound", () => {
    const from = new Date("2018-06-10T12:00:00.000Z");
    const to = new Date("2018-06-20T12:00:00.000Z");
    const date = new Date("2018-06-25T12:00:00.000Z");

    expect(dateInRange(from, to)(date)).toBe(false);
  });

  it("includes the lower bound", () => {
    const from = new Date("2018-06-10T12:00:00.000Z");
    const to = new Date("2018-06-20T12:00:00.000Z");
    const date = from;

    expect(dateInRange(from, to)(date)).toBe(true);
  });

  it("includes the upper bound", () => {
    const from = new Date("2018-06-10T12:00:00.000Z");
    const to = new Date("2018-06-20T12:00:00.000Z");
    const date = to;

    expect(dateInRange(from, to)(date)).toBe(true);
  });
});
