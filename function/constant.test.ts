/* eslint-env jest */
// @ts-ignore ambiguous import
import constant from "./constant.ts";

describe("constant", () => {
  it("returns the given constant no matter of the input", () => {
    expect(constant(3)(15)).toBe(3);
  });
});
