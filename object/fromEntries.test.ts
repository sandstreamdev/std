/* eslint-env jest */
// @ts-ignore ambiguous import
import fromEntries from "./fromEntries.ts";

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
    if (Object.fromEntries) {
      expect(fromEntries).toBe(Object.fromEntries);
    } else {
      expect(fromEntries).not.toBe(Object.fromEntries);
    }
  });
});
