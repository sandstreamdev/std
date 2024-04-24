import lengthDiffers from "./lengthDiffers.js";

describe("lengthDiffers", () => {
  it("simply compares given arrays lengths", () => {
    expect(lengthDiffers([1, 2, 3], [1, 2])).toBe(true);
    expect(lengthDiffers([6, 7], [1, 2])).toBe(false);
    expect(lengthDiffers([1, 2, 3], [])).toBe(true);
  });
});
