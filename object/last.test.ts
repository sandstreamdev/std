import last from "./last.js";

describe("last", () => {
  it("returns the last value in the given object", () => {
    expect(last({ a: 1, b: 2, c: 3 })).toBe(3);
  });

  it("follows the default object iteration order", () => {
    expect(
      last({ a: 1, 0: "test", 76: "test2", b: 2, c: 3, abc: "test3" })
    ).toBe("test3");
  });

  it("handles empty objects", () => {
    expect(last({})).toBe(undefined);
  });
});
