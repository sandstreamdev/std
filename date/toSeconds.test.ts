/* eslint-env jest */
// @ts-ignore ambiguous import
import toSeconds from "./toSeconds.ts";

describe("toSeconds", () => {
  it("converts given second count to milliseconds", () => {
    expect(toSeconds(1000)).toEqual(1);
  });

  it("should handle multiple seconds", () => {
    expect(toSeconds(3000)).toEqual(3);
  });

  it("should handle sub-second resolution", () => {
    expect(toSeconds(500)).toEqual(0.5);
  });

  it("should handle over minute resolution", () => {
    expect(toSeconds(72250)).toEqual(72.25);
  });
});
