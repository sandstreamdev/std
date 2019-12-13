/* eslint-env jest */
// @ts-ignore ambiguous import
import flatMap from "./flatMap.ts";

// @ts-ignore ambiguous import
import flatten from "./flatten.ts";

const splitLetters = (text: string) => [...text];

describe("flatMap", () => {
  it("maps and flattens the result", () => {
    const xs = ["test", "123"];
    const expected = ["t", "e", "s", "t", "1", "2", "3"];

    const mapped = xs.map(splitLetters);
    const flattened = flatten(mapped);

    const result = flatMap(splitLetters)(xs);

    expect(result).toEqual(expected);
    expect(result).toEqual(flattened);
  });
});
