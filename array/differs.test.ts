/* eslint-env jest */
// @ts-ignore ambiguous import
import differs from "./differs.ts";

describe("differs", () => {
  it("short-circuits over length differences", () => {
    expect(differs([1, 2, 3], [1, 2])).toBe(true);
    expect(differs([2, 3], [1, 2, 5])).toBe(true);
  });

  it("short-circuits over parameter presence", () => {
    expect(differs(null, [1, 2])).toBe(true);
    expect(differs([2, 3], undefined)).toBe(true);
  });

  it("compares elements index-wise", () => {
    expect(differs([1, 2, 3], [1, 2, 3])).toBe(false);
    expect(differs([1, 2, 3], [1, 67, 3])).toBe(true);
  });
});
