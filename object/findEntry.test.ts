import findEntry from "./findEntry.js";

const odd = (x: number) => x % 2 === 1;
const greaterThan5 = (x: number) => x > 5;
const fourLetterKey = (_: number, key: string) => key.length === 4;

describe("findEntry", () => {
  it("searches the given object by the given predicate and returns the first entry that passes the predicate", () => {
    const xs = {
      tom: 1,
      alice: 2,
      bob: 3,
      john: 4,
      matt: 5,
      steven: 6,
      larry: 7
    };

    expect(findEntry(odd)(xs)).toEqual(["tom", xs.tom]);
    expect(findEntry(greaterThan5)(xs)).toEqual(["steven", xs.steven]);
    expect(findEntry(fourLetterKey)(xs)).toEqual(["john", xs.john]);
  });

  it("returns undefined when nothing passes the predicate", () => {
    const xs = { somebody: 2, nobody: 4 };

    expect(findEntry(odd)(xs)).toBe(undefined);
    expect(findEntry(greaterThan5)(xs)).toBe(undefined);
    expect(findEntry(fourLetterKey)(xs)).toBe(undefined);
  });
});
