import clamp from "./clamp.js";

describe("clamp", () => {
  it("should do nothing when value fits the range", () => {
    const date = new Date("2019-02-28T13:54:33.232Z");
    const min = new Date("2019-02-23T13:54:33.232Z");
    const max = new Date("2019-03-13T13:54:33.232Z");

    const clampToRange = clamp(min, max);
    const clamped = clampToRange(date);

    expect(clamped).toEqual(date);
  });

  it("should clamp to upper bound", () => {
    const date = new Date("2019-06-15T13:54:33.232Z");
    const min = new Date("2019-02-23T13:54:33.232Z");
    const max = new Date("2019-03-13T13:54:33.232Z");

    const clampToRange = clamp(min, max);
    const clamped = clampToRange(date);

    expect(clamped).toEqual(max);
  });

  it("should clamp to lower bound", () => {
    const date = new Date("2019-01-15T13:54:33.232Z");
    const min = new Date("2019-02-23T13:54:33.232Z");
    const max = new Date("2019-03-13T13:54:33.232Z");

    const clampToRange = clamp(min, max);
    const clamped = clampToRange(date);

    expect(clamped).toEqual(min);
  });
});
