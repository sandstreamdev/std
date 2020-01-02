/* eslint-env jest */
// @ts-ignore ambiguous import
import entries from "./entries.ts";

describe("entries", () => {
  it("lists key value pairs (entries) present in the given object", () => {
    expect(entries({ a: 1, b: 2, c: 3 })).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ]);
  });

  it("uses default object iteration order", () => {
    expect(entries({ a: 1, 0: "test", 76: "test2", b: 2, c: 3 })).toEqual([
      ["0", "test"],
      ["76", "test2"],
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ]);
  });

  it("skips symbols", () => {
    const symbol = Symbol("test");

    const xs = { a: 1, b: 2, [symbol]: "symbol", c: 3 };

    expect(entries(xs)).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ]);

    expect(Object.getOwnPropertySymbols(xs)).toEqual([symbol]);
  });
});
