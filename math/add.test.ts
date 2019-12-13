/* eslint-env jest */
// @ts-ignore ambiguous import
import add from "./add.ts";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(3, 5)).toBe(8);
  });

  it("is symmetric", () => {
    expect(add(3, 5)).toBe(add(5, 3));
  });
});
