import empty from "./empty.js";

describe("empty", () => {
  it("checks if the given range is empty", () => {
    expect(empty([2, 2])).toBe(true);
    expect(empty([1, 5])).toBe(false);
    expect(empty([0, 0])).toBe(true);
  });
});
