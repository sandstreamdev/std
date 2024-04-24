import second from "./second.js";

describe("second", () => {
  it("returns the second element of the given array when there are at least two elements", () => {
    expect(second([1, 2, 3, 4, 5])).toBe(2);
  });

  it("returns undefined when there are less than two elements", () => {
    expect(second([])).toBe(undefined);
    expect(second([1])).toBe(undefined);
  });
});
