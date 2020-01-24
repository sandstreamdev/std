/* eslint-env jest */
// @ts-ignore ambiguous import
import removeAt from "./removeAt.ts";

describe("removeAt", () => {
  it("should remove the element specified by index", () => {
    expect(removeAt(3)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 5, 6]);
  });

  it("should return source array when given index is out of range", () => {
    expect(removeAt(3)([])).toEqual([]);
    expect(removeAt(-1)([])).toEqual([]);
    expect(removeAt(3)([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeAt(-1)([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
