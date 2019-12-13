/* eslint-env jest */
// @ts-ignore ambiguous import
import startOfDay from "./startOfDay.ts";

describe("startOfDay", () => {
  const date = new Date("2018-12-31T13:54:33.232Z");

  it("should handle timezone offsets", () => {
    const localOffset = -300;

    const start = startOfDay(date, localOffset);
    const expectedUTC = new Date("2018-12-31T05:00:00.000Z");
    const expectedLocal = new Date("2018-12-31T00:00:00.000-05:00");

    expect(start).toEqual(expectedUTC);
    expect(start).toEqual(expectedLocal);
  });

  it("should handle default local date time display", () => {
    const localOffset = 0;

    expect(startOfDay(date)).toEqual(startOfDay(date, localOffset));
  });
});
