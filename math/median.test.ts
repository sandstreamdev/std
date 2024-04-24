import median from "./median.js";

describe("median", () => {
  it("orders the value set by value and then calculates the median value", () => {
    expect(median([-5, 3, 2, 29, 43])).toBe(3);
  });

  it("returns the middle element of the sorted values when the number of elements is odd", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
  });

  it("averages middle values when the number of elements is even", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  it("returns undefined for empty arrays", () => {
    expect(median([])).toBe(undefined);
  });

  it("returns the only element for singleton arrays", () => {
    expect(median([1])).toBe(1);
  });
});
