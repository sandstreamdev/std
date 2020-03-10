/* eslint-env jest */
// @ts-ignore ambiguous import
import filterInPlace from "./filterInPlace.ts";

describe("filterInPlace", () => {
  it("mutates the given array", () => {
    const xs = [1, 2, 3, 4, 5, 6, 7];
    const odd = (x: number) => x % 2 === 1;

    const ys = filterInPlace(odd)(xs);

    expect(ys).toBe(xs);
    expect(ys).toEqual([1, 3, 5, 7]);
  });
});
