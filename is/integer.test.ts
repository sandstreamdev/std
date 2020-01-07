/* eslint-env jest */
// @ts-ignore ambiguous import
import integer from "./integer.ts";

// @ts-ignore ambiguous import
import range from "../array/range.ts";

describe("integer", () => {
  it("checks if given value is an integer", () => {
    expect(integer(128)).toBe(true);
    expect(integer(0.5)).toBe(false);
    expect(integer(2 / 3)).toBe(false);

    for (const value of range(100)) {
      expect(integer(value)).toBe(true);
    }

    expect(integer(128.5)).toBe(false);

    expect(integer(null)).toBe(false);
    expect(integer(undefined)).toBe(false);
    expect(integer("test")).toBe(false);
    expect(integer({})).toBe(false);
    expect(integer([])).toBe(false);
  });
});
