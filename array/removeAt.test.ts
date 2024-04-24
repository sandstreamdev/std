import removeAt from "./removeAt.js";

describe("removeAt", () => {
  it("should remove an element at the specified index", () => {
    expect(removeAt(3)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 5, 6]);
  });

  it("should do nothing when given an index out of range", () => {
    expect(removeAt(3)([])).toEqual([]);
    expect(removeAt(-1)([])).toEqual([]);
    expect(removeAt(3)([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeAt(-1)([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
