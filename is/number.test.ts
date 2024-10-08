import number from "./number.js";

describe("number", () => {
  it("checks if the given value is a number", () => {
    expect(number(5)).toBe(true);
    expect(number(1.5)).toBe(true);
    expect(number(-2)).toBe(true);
    expect(number(0)).toBe(true);

    expect(number(Infinity)).toBe(false);
    expect(number(-Infinity)).toBe(false);
    expect(number(NaN)).toBe(false);

    expect(number("test")).toBe(false);
    expect(number("")).toBe(false);
    expect(number(null)).toBe(false);
    expect(number({})).toBe(false);
    expect(number([])).toBe(false);
    expect(number(false)).toBe(false);

    expect(number("test")).toBe(false);
  });
});
