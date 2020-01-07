/* eslint-env jest */
// @ts-ignore ambiguous import
import flatMapValues from "./flatMapValues.ts";

describe("flatMapValues", () => {
  it("flat maps the values of the given object", () => {
    const upperLower = (text: string): [string, string] => [
      text.toUpperCase(),
      text.toLowerCase()
    ];

    expect(
      flatMapValues(upperLower)({ tom: "ToM", john: "JOHN", Alice: "alice" })
    ).toEqual(["TOM", "tom", "JOHN", "john", "ALICE", "alice"]);
  });

  it("flattens a single level only", () => {
    const upperLower = (
      text: string
    ): [string, string, [number, [number, number]]] => [
      text.toUpperCase(),
      text.toLowerCase(),
      [1, [2, 3]]
    ];

    expect(
      flatMapValues(upperLower)({ tom: "ToM", john: "JOHN", Alice: "alice" })
    ).toEqual([
      "TOM",
      "tom",
      [1, [2, 3]],
      "JOHN",
      "john",
      [1, [2, 3]],
      "ALICE",
      "alice",
      [1, [2, 3]]
    ]);
  });
});
