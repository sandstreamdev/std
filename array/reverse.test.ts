/* eslint-env jest */
// @ts-ignore ambiguous import
import reverse from "./reverse.ts";

describe("reverse", () => {
  it("reverses the array without mutating it", () => {
    const xs = [1, 2, 3, 4, 5];

    expect(reverse(xs)).not.toBe(xs);
    expect(reverse(xs)).toEqual([5, 4, 3, 2, 1]);
    expect(xs).toEqual([1, 2, 3, 4, 5]);
  });
});
