/* eslint-env jest */
// @ts-ignore ambiguous import
import first from "./first.ts";

describe("first", () => {
  it("return the first value in the given object", () => {
    expect(first({ a: 1, b: 2, c: 3 })).toBe(1);
  });

  it("return the first value in the given object", () => {
    expect(first({ a: 1, 0: "test", 76: "test2", b: 2, c: 3 })).toBe("test");
  });

  it("handles empty objects", () => {
    expect(first({})).toBe(undefined);
  });
});
