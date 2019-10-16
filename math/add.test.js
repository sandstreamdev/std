/* eslint-env jest */
import add from "./add.js";

describe("add", () => {
  it("adds two numbers together", () => {
    expect(add(5, 1)).toBe(6);
  });

  it("handles negative values", () => {
    expect(add(3, -7)).toBe(-4);
  });

  it("does not influence the result if given zeros", () => {
    expect(add(15, 0)).toBe(15);
    expect(add(0, 15)).toBe(15);
  });

  it("does not care about arguments order", () => {
    expect(add(16, 7)).toBe(add(7, 16));
  });
});
