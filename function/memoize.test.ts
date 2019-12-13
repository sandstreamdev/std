/* eslint-env jest */
// @ts-ignore ambiguous import
import memoize from "./memoize.ts";

describe("memoize", () => {
  it("memoizes the result", () => {
    const f = jest.fn(x => x * x);

    const memoized = memoize(f);

    expect(memoized(3)).toBe(9);
    expect(memoized(3)).toBe(9);

    expect(f).toBeCalledTimes(1);
  });

  it("uses deep equality", () => {
    const f = jest.fn(({ age }) => age >= 18);

    const memoized = memoize(f);

    expect(memoized({ age: 18 })).toBe(true);
    expect(memoized({ age: 18 })).toBe(true);

    expect(f).toBeCalledTimes(1);
  });

  it("supports multiple arguments", () => {
    const f = jest.fn((x, y) => x + y);

    const memoized = memoize(f);

    expect(memoized(3, 5)).toBe(8);
    expect(memoized(3, 5)).toBe(8);

    expect(f).toBeCalledTimes(1);
  });

  it("keeps only a single value in memory", () => {
    const f = jest.fn(x => x * x);

    const memoized = memoize(f);

    expect(memoized(3)).toBe(9);
    expect(memoized(8)).toBe(64);
    expect(memoized(3)).toBe(9);

    expect(f).toBeCalledTimes(3);
  });
});
