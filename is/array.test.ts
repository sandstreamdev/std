import array from "./array.js";

describe("array", () => {
  it("checks if the given argument is an array", () => {
    expect(array([])).toBe(true);
    expect(array([1, 2, 3])).toBe(true);
    expect(array({})).toBe(false);
    expect(array("")).toBe(false);
    expect(array(5)).toBe(false);
    expect(array("test")).toBe(false);
    expect(array(new Set([1, 2, 3]))).toBe(false);
    expect(
      array(
        new Map([
          ["a", 1],
          ["b", 2],
          ["c", 3]
        ])
      )
    ).toBe(false);
  });
});
