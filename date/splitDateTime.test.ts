/* eslint-env jest */
// @ts-ignore ambiguous import
import splitDateTime from "./splitDateTime.ts";

describe("splitDateTime", () => {
  it("splits a date-time string into a date-time pair", () => {
    const isoDateTimeString = "2019-01-15T13:54:33.232Z";

    expect(splitDateTime(isoDateTimeString)).toEqual([
      "2019-01-15",
      "13:54:33.232Z"
    ]);
  });
});
