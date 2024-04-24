import ceilToNearestPowerOfTwo from "./ceilToNearestPowerOfTwo.js";

describe("ceilToNearestPowerOfTwo", () => {
  it("finds the nearest power of two greater or equal to the given value", () => {
    expect(ceilToNearestPowerOfTwo(345)).toBe(512);
    expect(ceilToNearestPowerOfTwo(32)).toBe(32);
    expect(ceilToNearestPowerOfTwo(768)).toBe(1024);
    expect(ceilToNearestPowerOfTwo(2)).toBe(2);
    expect(ceilToNearestPowerOfTwo(1)).toBe(1);
    expect(ceilToNearestPowerOfTwo(6)).toBe(8);
  });
});
