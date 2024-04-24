import any from "./any.js";

describe("any", () => {
  it("returns true if the array is not empty", () => {
    expect(any([1, 2])).toBe(true);
  });

  it("returns false if the array is empty", () => {
    expect(any([])).toBe(false);
  });

  it("returns false if the given array is missing or the argument is falsy", () => {
    expect(any()).toBe(false);
    expect(any(undefined)).toBe(false);
  });
});
