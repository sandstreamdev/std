import add from "./add.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(3, 5)).toBe(8);
  });

  it("is symmetric", () => {
    expect(add(3, 5)).toBe(add(5, 3));
  });
});
