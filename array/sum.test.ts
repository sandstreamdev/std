import sum from "./sum.js";

describe("sum", () => {
  it("sums the given array of numbers", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
    expect(sum([13, 79, 20, -69, 44, 67, -18, -95, 26, 55])).toBe(122);
  });

  it("returns 0 for empty arrays", () => {
    expect(sum([])).toBe(0);
  });
});
