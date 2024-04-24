import multiple from "./multiple.js";

describe("multiple", () => {
  it("checks if the given array contains more than one element", () => {
    expect(multiple([1, 2, 3])).toBe(true);
    expect(multiple([1, 2])).toBe(true);
    expect(multiple([1])).toBe(false);
    expect(multiple([])).toBe(false);
  });
});
