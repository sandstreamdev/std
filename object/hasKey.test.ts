/* eslint-env jest */
// @ts-ignore ambiguous import
import hasKey from "./hasKey.ts";

describe("hasKey", () => {
  it("checks key presence", () => {
    expect(hasKey("a")({ a: 1, b: 2, c: 3 })).toBe(true);
    expect(hasKey("d")({ a: 1, b: 2, c: 3 })).toBe(false);
  });

  it("handles symbols", () => {
    const symbol = Symbol("test");

    expect(hasKey(symbol)({ a: 1, b: 2, c: 3, [symbol]: true })).toBe(true);
    expect(hasKey(symbol)({ a: 1, b: 2, c: 3 })).toBe(false);
  });

  it("always returns false for empty or missing objects", () => {
    expect(hasKey("anything")({})).toBe(false);
    expect(hasKey("anything")(null)).toBe(false);
    expect(hasKey("anything")(undefined)).toBe(false);
  });
});
