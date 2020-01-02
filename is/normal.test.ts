/* eslint-env jest */
// @ts-ignore ambiguous import
import normal from "./normal.ts";

// @ts-ignore ambiguous import
import range from "../array/range.ts";

describe("normal", () => {
  it("checks is a number in a normal range [0, 1]", () => {
    expect(normal(0.5)).not.toBe(false);
    expect(normal(0)).not.toBe(false);
    expect(normal(1)).not.toBe(false);
    expect(normal(1.5)).toBe(false);
    expect(normal(-1)).toBe(false);

    for (const value of range(100)) {
      expect(normal(value / 100)).not.toBe(false);
    }

    expect(normal(null)).toBe(false);
    expect(normal(undefined)).toBe(false);
    expect(normal("test")).toBe(false);
    expect(normal({})).toBe(false);
    expect(normal([])).toBe(false);

    expect(normal(5)).toBe(false);
  });
});
