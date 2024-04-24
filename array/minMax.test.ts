import minMax from "./minMax.js";

describe("minMax", () => {
  it("computes minimum and maximum of the given array", () => {
    expect(minMax([10, 5, 3, -5, -4, 23, 32, 8, 1, 0])).toEqual([-5, 32]);
  });

  it("handles singleton arrays", () => {
    expect(minMax([1])).toEqual([1, 1]);
  });

  it("is not defined for empty arrays", () => {
    expect(minMax([])).toEqual([undefined, undefined]);
  });
});
