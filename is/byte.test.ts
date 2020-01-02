/* eslint-env jest */
// @ts-ignore ambiguous import
import byte from "./byte.ts";

// @ts-ignore ambiguous import
import range from "../array/range.ts";

describe("byte", () => {
  it("checks if the given value is a byte", () => {
    for (const value of range(256)) {
      expect(byte(value)).toBe(true);
    }

    expect(byte(256)).toBe(false);
    expect(byte(-3)).toBe(false);

    expect(byte(512)).toBe(false);
    expect(byte(128.5)).toBe(false);

    expect(byte(null)).toBe(false);
    expect(byte(undefined)).toBe(false);
    expect(byte("test")).toBe(false);
    expect(byte({})).toBe(false);
    expect(byte([])).toBe(false);
  });
});
