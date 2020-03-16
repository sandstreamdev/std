/* eslint-env jest */
// @ts-ignore ambiguous import
import toDates from "./toDates.ts";

describe("toDates", () => {
  it("converts given array of values into Dates using the Date constructor", () => {
    expect(
      toDates([
        "2019-01-15T13:54:33.232Z",
        new Date("2019-01-15T13:54:33.232Z").valueOf(),
        new Date("2019-01-15T13:54:33.232Z")
      ])
    ).toEqual([
      new Date("2019-01-15T13:54:33.232Z"),
      new Date("2019-01-15T13:54:33.232Z"),
      new Date("2019-01-15T13:54:33.232Z")
    ]);
  });
});
