/* eslint-env jest */
// @ts-ignore ambiguous import
import when from "./when.ts";

describe("when", () => {
  it("runs the function only when the condition is met", () => {
    const f = jest.fn((x, y) => x + y);
    const greaterThan0 = (x: number) => x > 0;

    expect(when(greaterThan0)(f)(3, 5)).toBe(8);
    expect(f).toBeCalled();
  });

  it("runs the function only when the condition is met", () => {
    const f = jest.fn((x, y) => x + y);
    const greaterThan0 = (x: number) => x > 0;

    expect(when(greaterThan0)(f)(-3, 5)).toBe(undefined);
    expect(f).not.toBeCalled();
  });
});
