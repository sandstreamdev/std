/* eslint-env jest */
// @ts-ignore ambiguous import
import endOfDay from "./endOfDay.ts";

describe("endOfDay", () => {
  const date = new Date("2018-12-31T13:54:33.232Z");

  it("should handle timezone offsets", () => {
    const localOffset = -180;

    const end = endOfDay(date, localOffset);
    const expectedUTC = new Date("2019-01-01T03:00:00.000Z");
    const expectedLocal = new Date("2018-12-31T24:00:00.000-03:00");

    expect(end).toEqual(expectedUTC);
    expect(end).toEqual(expectedLocal);
  });

  it("should handle default local date time display", () => {
    const localOffset = 0;

    expect(endOfDay(date)).toEqual(endOfDay(date, localOffset));
  });
});
