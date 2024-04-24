import single from "./single.js";

describe("single", () => {
  it("checks if the given array contains exactly one element", () => {
    expect(single([1])).toBe(true);
    expect(single([1, 2, 3])).toBe(false);
    expect(single([1, 2])).toBe(false);
    expect(single([])).toBe(false);
  });
});
