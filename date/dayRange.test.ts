/* eslint-env jest */
// @ts-ignore ambiguous import
import dayRange from "./dayRange.ts";
// @ts-ignore ambiguous import
import startOfDay from "./startOfDay.ts";
// @ts-ignore ambiguous import
import endOfDay from "./endOfDay.ts";

describe("dayRange", () => {
  it("returns a local day range at a particular Date", () => {
    const date = new Date("2018-12-31T13:54:33.232Z");

    expect(dayRange(date)).toEqual([startOfDay(date), endOfDay(date)]);
  });
});
