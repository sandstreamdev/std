/* eslint-env jest */
// @ts-ignore ambiguous import
import enumerable from "./enumerable.ts";

describe("enumerable", () => {
  it("creates a 1 to 1 mapping of the given values as an object", () => {
    expect(enumerable("TEST", "X", "Y")).toEqual({
      TEST: "TEST",
      X: "X",
      Y: "Y"
    });
  });

  it("overrides duplicated values", () => {
    expect(enumerable("a", "b", "a")).toEqual({
      a: "a",
      b: "b"
    });
  });

  it("is useful with object destructuring", () => {
    const { SMALL, MEDIUM, BIG } = enumerable("SMALL", "MEDIUM", "BIG");

    expect(SMALL).toEqual("SMALL");
    expect(MEDIUM).toEqual("MEDIUM");
    expect(BIG).toEqual("BIG");
  });

  it("handles no input gracefully", () => {
    expect(enumerable()).toEqual({});
  });
});
