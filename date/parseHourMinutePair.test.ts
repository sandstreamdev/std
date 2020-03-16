/* eslint-env jest */
// @ts-ignore ambiguous import
import parseHourMinutePair from "./parseHourMinutePair.ts";

describe("parseHourMinutePair", () => {
  it("should handle basic case", () => {
    const pair = "12:34";

    const [hours, minutes] = parseHourMinutePair(pair);

    expect(hours).toEqual(12);
    expect(minutes).toEqual(34);
  });

  it("should handle just hours", () => {
    const pair = "34";

    const [hours] = parseHourMinutePair(pair);

    expect(hours).toEqual(34);
  });

  it("should handle variable number of digits", () => {
    const pair = "2123:534";

    const [hours, minutes] = parseHourMinutePair(pair);

    expect(hours).toEqual(2123);
    expect(minutes).toEqual(534);
  });

  it("should fallback to zeros", () => {
    const pair = "";

    const [hours, minutes] = parseHourMinutePair(pair);

    expect(hours).toEqual(0);
    expect(minutes).toEqual(0);
  });

  it("should fallback to zeros when missing input", () => {
    const [hours, minutes] = parseHourMinutePair();

    expect(hours).toEqual(0);
    expect(minutes).toEqual(0);
  });

  it("should fallback to zeros for missing hours", () => {
    const pair = ":15";

    const [hours, minutes] = parseHourMinutePair(pair);

    expect(hours).toEqual(0);
    expect(minutes).toEqual(15);
  });

  it("should fallback to zeros for missing minutes", () => {
    const pair = "3:";

    const [hours, minutes] = parseHourMinutePair(pair);

    expect(hours).toEqual(3);
    expect(minutes).toEqual(0);
  });
});
