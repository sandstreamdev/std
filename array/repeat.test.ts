import repeat from "./repeat.js";

describe("repeat", () => {
  it("repeats the given element by given count of times", () => {
    expect(repeat(3)("test")).toEqual(["test", "test", "test"]);
  });

  it("returns an empty array for 0 repeat count", () => {
    expect(repeat(0)("anything")).toEqual([]);
  });

  it("throws RangeError exception for negative counts", () => {
    expect(() => repeat(-3)("test")).toThrow(RangeError);
  });
});
