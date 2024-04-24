import sign from "./sign.js";

describe("sign", () => {
  it("returns -1 for negative values", () => {
    expect(sign(-5)).toBe(-1);
  });

  it("returns 1 for positive values", () => {
    expect(sign(3)).toBe(1);
  });

  it("returns 0 for 0s", () => {
    expect(sign(0)).toBe(0);
    expect(sign(-0)).toBe(0);
  });
});
