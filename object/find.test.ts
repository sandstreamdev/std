/* eslint-env jest */
// @ts-ignore ambiguous import
import find from "./find.ts";

const odd = (x: number) => x % 2 === 1;
const greaterThan5 = (x: number) => x > 5;
const fourLetterKey = (_: number, key: string) => key.length === 4;

describe("find", () => {
  it("searches the given object by the given predicate and returns the first value that passes the predicate", () => {
    const xs = {
      tom: 1,
      alice: 2,
      bob: 3,
      john: 4,
      matt: 5,
      steven: 6,
      larry: 7
    };

    expect(find(odd)(xs)).toEqual(xs.tom);
    expect(find(greaterThan5)(xs)).toEqual(xs.steven);
    expect(find(fourLetterKey)(xs)).toEqual(xs.john);
  });

  it("returns undefined when nothing passes the predicate", () => {
    const xs = { somebody: 2, nobody: 4 };

    expect(find(odd)(xs)).toBe(undefined);
    expect(find(greaterThan5)(xs)).toBe(undefined);
    expect(find(fourLetterKey)(xs)).toBe(undefined);
  });
});
