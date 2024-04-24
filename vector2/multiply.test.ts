import multiply from "./multiply.js";

describe("multiply", () => {
  it("multiples two matrices", () => {
    expect(
      multiply(
        { a: 1, c: 2, e: 3, b: 4, d: 5, f: 6 },
        { a: 7, c: 8, e: 9, b: 10, d: 11, f: 12 }
      )
    ).toEqual({ a: 27, b: 78, c: 30, d: 87, e: 36, f: 102 });
  });
});
