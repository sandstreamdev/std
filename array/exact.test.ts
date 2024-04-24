import exact from "./exact.js";

describe("exact", () => {
  it("takes exactly the given count of items and fills blanks with undefined values", () => {
    expect(exact(5)([1, 2, 3])).toEqual([1, 2, 3, undefined, undefined]);
  });
});
