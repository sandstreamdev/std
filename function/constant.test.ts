/* eslint-env jest */
// @ts-ignore ambiguous import
import constant from "./constant.ts";

describe("constant", () => {
  it("returns the given constant no matter the input", () => {
    expect(constant(3)("anything")).toBe(3);
  });
});
