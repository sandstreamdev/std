import are from "./are.js";

describe("are", () => {
  it("returns true if the given arguments are all arrays", () => {
    expect(are([2, 3])).toBe(true);
    expect(are([1, 2, 3], [])).toBe(true);
    expect(are([1, 2, 3], 8, [1, 3], "test")).toBe(false);
  });

  it("returns true for empty list of arguments", () => {
    expect(are()).toBe(true);
  });
});
