/* eslint-env jest */
// @ts-ignore ambiguous import
import dateDiff from "./dateDiff.ts";
// @ts-ignore ambiguous import
import fromHours from "./fromHours.ts";

describe("dateDiff", () => {
  it("computes date difference between two Date objects as milliseconds", () => {
    const a = new Date("2017-01-01T12:00:00.000Z");
    const b = new Date("2017-01-01T13:00:00.000Z");

    expect(dateDiff(b, a)).toBe(fromHours(1));
  });

  it("uses signed difference so the order matters", () => {
    const a = new Date("2017-01-01T12:00:00.000Z");
    const b = new Date("2017-01-01T13:00:00.000Z");

    expect(dateDiff(a, b)).toBe(-dateDiff(b, a));
  });
});
