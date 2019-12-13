/* eslint-env jest */
// @ts-ignore ambiguous import
import dot from "./dot.ts";

describe("dot", () => {
  it("calculates a dot product", () => {
    expect(dot([3, 5], [-1, 8])).toBe(37);

    expect(dot([3, 5], [-1, -8])).toEqual(-43);
  });
});
