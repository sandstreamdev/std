import none from "./none.js";

describe("none", () => {
  it("checks if the given object is empty", () => {
    expect(none({ a: 1, b: 2, c: 3 })).toBe(false);
    expect(none({})).toBe(true);
  });

  it("returns true if the given object is missing or the argument is falsy", () => {
    expect(none()).toBe(true);
    expect(none(null)).toBe(true);
    expect(none(undefined)).toBe(true);
  });
});
