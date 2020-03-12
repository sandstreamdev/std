/* eslint-env jest */
// @ts-ignore ambiguous import
import joinDateTime from "./joinDateTime.ts";

describe("joinDateTime", () => {
  it("joins a date time pair into a date time string", () => {
    const date = "2019-01-15";
    const time = "13:54:33.232Z";

    expect(joinDateTime(date, time)).toEqual("2019-01-15T13:54:33.232Z");
  });
});
