import zipWith from "./zipWith.js";

describe("zipWith", () => {
  it("zips with pair constructor by default", () => {
    expect(zipWith()([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("can zip with any binary function", () => {
    const f = (x: number, y: number) => x * x + y;

    expect(zipWith(f)([1, 2, 3], [4, 5, 6])).toEqual([5, 9, 15]);
  });
});
