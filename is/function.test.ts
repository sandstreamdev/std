import _function from "./function.js";

describe("function", () => {
  it("checks if the given value is a function", () => {
    expect(
      _function(() => {
        {
          return 5;
        }
      })
    ).toBe(true);

    expect(_function(() => {})).toBe(true);
    expect(_function(function test() {})).toBe(true);
    expect(_function(Math.min)).toBe(true);

    expect(_function(null)).toBe(false);
    expect(_function(false)).toBe(false);
    expect(_function(0)).toBe(false);
    expect(_function("")).toBe(false);

    expect(_function({})).toBe(false);
    expect(_function([])).toBe(false);
    expect(_function(NaN)).toBe(false);

    expect(_function("test")).toBe(false);
    expect(_function([1, 2, 3])).toBe(false);
    expect(_function({ a: 1, b: 2, c: 3 })).toBe(false);
    expect(_function(17.6)).toBe(false);
  });
});
