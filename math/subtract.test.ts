import subtract from "./subtract.js";

describe("subtract", () => {
  it("subtracts two numbers", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  it("makes the order matter", () => {
    expect(subtract(3, 5)).not.toBe(subtract(5, 3));
  });
});
