import toMinutes from "./toMinutes.js";

describe("toMinutes", () => {
  it("converts milliseconds into minutes", () => {
    expect(toMinutes(60000)).toEqual(1);
  });

  it("should handle multiple minutes", () => {
    expect(toMinutes(180000)).toEqual(3);
  });

  it("should handle sub-minute resolution", () => {
    expect(toMinutes(30000)).toEqual(0.5);
  });

  it("should handle over hour resolution", () => {
    expect(toMinutes(4335000)).toEqual(72.25);
  });
});
