/* eslint-env jest */
// @ts-ignore ambiguous import
import fromEntries, { implementation } from "./fromEntries.ts";

describe("fromEntries", () => {
  it("creates an object from an array of entries", () => {
    expect(
      fromEntries([
        ["a", 1],
        ["b", 2],
        ["c", 3]
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("overrides duplicated values", () => {
    expect(
      fromEntries([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["c", 6],
        ["a", 8]
      ])
    ).toEqual({ a: 8, b: 2, c: 6 });
  });

  it("handles empty entries", () => {
    expect(fromEntries([])).toEqual({});
  });

  it("uses fallback implementation when Object.fromEntries is not present", () => {
    const before = Object.fromEntries;

    // @ts-ignore
    Object.fromEntries = undefined;

    expect(
      fromEntries([
        ["a", 1],
        ["b", 2],
        ["c", 3]
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });

    Object.fromEntries = before;
  });

  it("fallback implementation works as Object.fromEntries", () => {
    expect(
      implementation([
        ["a", 1],
        ["b", 2],
        ["c", 3]
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });

    expect(
      implementation([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["c", 6],
        ["a", 8]
      ])
    ).toEqual({ a: 8, b: 2, c: 6 });

    expect(implementation([])).toEqual({});
  });
});
