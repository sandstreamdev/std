import sort from "./sort.js";

describe("sort", () => {
  it("sorts the given object", () => {
    const by = (a: number, b: number) => a - b;

    expect(sort(by)({ a: 3, b: 2, c: 3, d: -7, e: 13, f: 0, g: 8 })).toEqual({
      d: -7,
      f: 0,
      b: 2,
      a: 3,
      c: 3,
      g: 8,
      e: 13
    });
  });
});
