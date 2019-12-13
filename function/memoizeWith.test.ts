/* eslint-env jest */
// @ts-ignore ambiguous import
import memoizeWith from "./memoizeWith.ts";

describe("memoizeWith", () => {
  it("uses the given equality function", () => {
    const equals = ([x], [y]) => x === y;

    const f = jest.fn(x => x * x);

    const memoized = memoizeWith(equals)(f);

    expect(memoized(3)).toBe(9);
    expect(memoized(3)).toBe(9);

    expect(f).toBeCalledTimes(1);
  });

  it("uses the given equality function", () => {
    const equals = () => false;

    const f = jest.fn(x => x * x);

    const memoized = memoizeWith(equals)(f);

    expect(memoized(3)).toBe(9);
    expect(memoized(3)).toBe(9);

    expect(f).toBeCalledTimes(2);
  });
});
