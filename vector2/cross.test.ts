/* eslint-env jest */
// @ts-ignore ambiguous import
import cross from "./cross.ts";

describe("cross", () => {
  it("calculates a cross product", () => {
    expect(cross([3, 5], [-1, 8])).toBe(29);

    expect(cross([3, 5], [-1, -8])).toBe(-19);
  });
});
