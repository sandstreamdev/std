/* eslint-env jest */
// @ts-ignore ambiguous import
import memoizeShallow from "./memoizeShallow.ts";

describe("memoizeShallow", () => {
  it("memoizes the result", () => {
    const f = jest.fn(x => x * x);

    const memoized = memoizeShallow(f);

    expect(memoized(3)).toBe(9);
    expect(memoized(3)).toBe(9);

    expect(f).toBeCalledTimes(1);
  });

  it("uses shallow equality", () => {
    const f = jest.fn(({ age }) => age >= 18);

    const memoized = memoizeShallow(f);

    expect(memoized({ age: 18 })).toBe(true);
    expect(memoized({ age: 18 })).toBe(true);

    expect(f).toBeCalledTimes(2);
  });

  it("supports multiple arguments", () => {
    const f = jest.fn((x, y) => x + y);

    const memoized = memoizeShallow(f);

    expect(memoized(3, 5)).toBe(8);
    expect(memoized(3, 5)).toBe(8);

    expect(f).toBeCalledTimes(1);
  });
});
