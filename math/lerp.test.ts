import lerp from "./lerp.js";

describe("lerp", () => {
  it("linearly interpolates the given values", () => {
    expect(lerp(0.5)(0, 10)).toBe(5);
    expect(lerp(0)(0, 10)).toBe(0);
    expect(lerp(1)(0, 10)).toBe(10);
  });

  it("informally supports out of range interpolation", () => {
    expect(lerp(2)(0, 10)).toBe(20);
    expect(lerp(-10)(0, 10)).toBe(-100);
  });
});
