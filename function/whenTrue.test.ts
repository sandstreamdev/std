/* eslint-env jest */
// @ts-ignore ambiguous import
import whenTrue from "./whenTrue.ts";

describe("whenTrue", () => {
  it("runs the function only when the condition is true", () => {
    const f = jest.fn();

    expect(whenTrue(f)(true)).toBe(undefined);
    expect(f).toBeCalled();
  });

  it("does not run the given function when the condition is not true", () => {
    const f = jest.fn();

    expect(whenTrue(f)(false)).toBe(undefined);
    expect(whenTrue(f)(5)).toBe(undefined);
    expect(whenTrue(f)(0)).toBe(undefined);
    expect(whenTrue(f)("test")).toBe(undefined);
    expect(f).not.toBeCalled();
  });
});
