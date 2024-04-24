import clamp from "./clamp.js";

describe("clamp", () => {
  it("does nothing when the value is in range", () => {
    expect(clamp(0, 10)(5)).toBe(5);
  });

  it("clamps to the min value when out of bound from the left", () => {
    expect(clamp(0, 10)(-5)).toBe(0);
  });

  it("clamps to the max value when out of bound from the right", () => {
    expect(clamp(0, 10)(15)).toBe(10);
  });

  it("is inclusive", () => {
    expect(clamp(0, 10)(0)).toBe(0);
    expect(clamp(0, 10)(10)).toBe(10);
  });
});
