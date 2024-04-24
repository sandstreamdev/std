import defined from "./defined.js";

describe("defined", () => {
  it("checks if the given value is defined", () => {
    expect(defined(undefined)).toBe(false);

    expect(defined(null)).toBe(true);
    expect(defined(false)).toBe(true);
    expect(defined(0)).toBe(true);
    expect(defined("")).toBe(true);

    expect(defined({})).toBe(true);
    expect(defined([])).toBe(true);
    expect(defined(NaN)).toBe(true);
    expect(defined(() => {})).toBe(true);

    expect(defined("test")).toBe(true);
    expect(defined([1, 2, 3])).toBe(true);
    expect(defined({ a: 1, b: 2, c: 3 })).toBe(true);
    expect(defined(17.6)).toBe(true);
    expect(defined(Math.min)).toBe(true);
  });
});
