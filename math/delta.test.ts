import delta from "./delta.js";

describe("delta", () => {
  it("is symmetric", () => {
    expect(delta(5, -3)).toBe(delta(-3, 5));
  });

  it("is always absolute", () => {
    expect(delta(5, -3)).toBe(8);
    expect(delta(-3, 5)).toBe(8);
  });
});
