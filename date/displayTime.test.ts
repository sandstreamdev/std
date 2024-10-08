import displayTime from "./displayTime.js";

describe("displayTime", () => {
  it("displays padded time string", () => {
    expect(displayTime([5, 12, 16], false)).toBe("05:12");
  });

  it("includes seconds display if enabled", () => {
    expect(displayTime([5, 12, 16], true)).toBe("05:12:16");
  });
});
