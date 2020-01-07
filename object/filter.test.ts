/* eslint-env jest */
// @ts-ignore ambiguous import
import filter from "./filter.ts";

describe("filter", () => {
  it("filters the given object with the given predicate", () => {
    const xs = {
      tom: 1,
      alice: 2,
      bob: 3,
      john: 4,
      matt: 5,
      steven: 6,
      larry: 7
    };

    const odd = (x: number) => x % 2 === 1;

    expect(filter(odd)(xs)).toEqual({
      tom: 1,
      bob: 3,
      matt: 5,
      larry: 7
    });
  });
});
