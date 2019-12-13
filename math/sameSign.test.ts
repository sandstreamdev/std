/* eslint-env jest */
// @ts-ignore ambiguous import
import sameSign from "./sameSign.ts";

describe("sameSign", () => {
  it("passes when all the values have the same sign", () => {
    expect(sameSign([1, 2, 3])).toBe(true);
    expect(sameSign([-1, -2, -3])).toBe(true);
    expect(sameSign([0, -0, 0])).toBe(true);
  });

  it("detects mixed signs", () => {
    expect(sameSign([1, 2, -3])).toBe(false);
    expect(sameSign([-1, 2, -3])).toBe(false);
    expect(sameSign([0, -3, 1, -0])).toBe(false);
  });
});
