import duplicates from "./duplicates.js";

describe("duplicates", () => {
  it("returns duplicated values", () => {
    expect(duplicates([1, 2, 3, 4, 3, 5, 6, 7])).toEqual([3]);
  });

  it("returns all the duplicated values when there are any", () => {
    expect(duplicates([1, 2, 3, 4, 3, 4, 3, 6])).toEqual([3, 4, 3]);
  });

  it("return an empty array when there are no duplicated", () => {
    expect(duplicates([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([]);
  });
});
