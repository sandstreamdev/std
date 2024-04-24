import fromMinutes from "./fromMinutes.js";

describe("fromMinutes", () => {
  it("converts given minute count to milliseconds", () => {
    expect(fromMinutes(1)).toEqual(60000);
  });

  it("should handle multiple minutes", () => {
    expect(fromMinutes(3)).toEqual(180000);
  });

  it("should handle sub-minute resolution", () => {
    expect(fromMinutes(0.5)).toEqual(30000);
  });

  it("should handle over hour resolution", () => {
    expect(fromMinutes(72.25)).toEqual(4335000);
  });
});
