import fromSeconds from "./fromSeconds.js";

describe("fromSeconds", () => {
  it("converts given second count to milliseconds", () => {
    expect(fromSeconds(1)).toEqual(1000);
  });

  it("should handle multiple seconds", () => {
    expect(fromSeconds(3)).toEqual(3000);
  });

  it("should handle sub-second resolution", () => {
    expect(fromSeconds(0.5)).toEqual(500);
  });

  it("should handle over minute resolution", () => {
    expect(fromSeconds(72.25)).toEqual(72250);
  });
});
