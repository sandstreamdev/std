import subtractDays from "./subtractDays.js";

describe("subtractDays", () => {
  it("subtracts the given number of days from the given Date object", () => {
    expect(subtractDays(new Date("2019-01-15T13:54:33.232Z"), 1)).toEqual(
      new Date("2019-01-14T13:54:33.232Z")
    );
  });

  it("does nothing when the offset is 0", () => {
    expect(subtractDays(new Date("2019-01-15T13:54:33.232Z"), 0)).toEqual(
      new Date("2019-01-15T13:54:33.232Z")
    );
  });

  it("supports forward adjustments when the offset is negative", () => {
    expect(subtractDays(new Date("2019-01-15T13:54:33.232Z"), -3)).toEqual(
      new Date("2019-01-18T13:54:33.232Z")
    );
  });
});
