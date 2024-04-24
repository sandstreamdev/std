import none from "./none.js";

describe("none", () => {
  it("checks if the given array is empty", () => {
    expect(none([1, 2, 3])).toBe(false);
    expect(none([])).toBe(true);
  });

  it("returns true if the given array is missing or the argument is falsy", () => {
    expect(none()).toBe(true);
    expect(none(null)).toBe(true);
    expect(none(undefined)).toBe(true);
  });
});
