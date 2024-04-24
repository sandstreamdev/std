import findKey from "./findKey.js";

const odd = (x: number) => x % 2 === 1;
const greaterThan5 = (x: number) => x > 5;
const fourLetterKey = (_: number, key: string) => key.length === 4;

describe("findKey", () => {
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

    expect(findKey(odd)(xs)).toEqual("tom");
    expect(findKey(greaterThan5)(xs)).toEqual("steven");
    expect(findKey(fourLetterKey)(xs)).toEqual("john");
  });

  it("returns undefined when nothing passes the predicate", () => {
    const xs = { somebody: 2, nobody: 4 };

    expect(findKey(odd)(xs)).toBe(undefined);
    expect(findKey(greaterThan5)(xs)).toBe(undefined);
    expect(findKey(fourLetterKey)(xs)).toBe(undefined);
  });
});
