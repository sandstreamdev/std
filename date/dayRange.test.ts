import dayRange from "./dayRange.js";
import startOfDay from "./startOfDay.js";
import endOfDay from "./endOfDay.js";

describe("dayRange", () => {
  it("returns a local day range at a particular Date", () => {
    const date = new Date("2018-12-31T13:54:33.232Z");

    expect(dayRange(date)).toEqual([startOfDay(date), endOfDay(date)]);
  });
});
