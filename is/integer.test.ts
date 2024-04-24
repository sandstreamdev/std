import integer from "./integer.js";

import range from "../array/range.js";

describe("integer", () => {
  it("checks if the given value is an integer", () => {
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
