import inRectangleRange from "./inRectangleRange.js";

describe("inRectangleRange", () => {
  it("tests if the given coordinates fits the rectangular range", () => {
    expect(inRectangleRange(50, 100)(25, 50)).toBe(true);
    expect(inRectangleRange(50, 100)(-25, 50)).toBe(false);
    expect(inRectangleRange(50, 100)(65, 50)).toBe(false);
    expect(inRectangleRange(50, 100)(25, -50)).toBe(false);
    expect(inRectangleRange(50, 100)(25, 150)).toBe(false);
  });
});
