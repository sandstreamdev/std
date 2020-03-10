/* eslint-env jest */
// @ts-ignore ambiguous import
import find from "./find.ts";

const greaterThan2 = (x: number) => x > 2;

describe("find", () => {
  it("returns the first value that passes the predicate test", () => {
    expect(find(greaterThan2)([1, 2, 3, 5, 7])).toBe(3);
  });

  it("works just like Array.find when no fallback is given", () => {
    expect(find(greaterThan2)([1, 2, -3, -5, -7])).toBe(undefined);
  });

  it("uses the given fallback when nothing is found", () => {
    expect(find(greaterThan2, "fallback value")([1, 2, -3, -5, -7])).toBe(
      "fallback value"
    );
  });
});
