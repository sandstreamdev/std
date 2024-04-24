import clampNormal from "./clampNormal.js";

describe("clampNormal", () => {
  it("does nothing when the value is in range", () => {
    expect(clampNormal(0.5)).toBe(0.5);
  });

  it("clamps to the min value when out of bound from the left", () => {
    expect(clampNormal(-0.5)).toBe(0);
  });

  it("clamps to the max value when out of bound from the right", () => {
    expect(clampNormal(1.5)).toBe(1);
  });

  it("is inclusive", () => {
    expect(clampNormal(0)).toBe(0);
    expect(clampNormal(1)).toBe(1);
  });
});
