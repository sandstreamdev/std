/* eslint-env jest */
// @ts-ignore ambiguous import
import sort from "./sort.ts";

describe("sort", () => {
  it("is pure", () => {
    const source = [5, 1, 3, 9];
    const distance = (a, b) => a - b;
    const sorted = sort(distance)(source);

    expect(sorted).toEqual([1, 3, 5, 9]);
    expect(sorted).not.toBe(source);
    expect(source).toEqual([5, 1, 3, 9]);
  });
});
