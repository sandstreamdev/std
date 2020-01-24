/* eslint-env jest */
// @ts-ignore ambiguous import
import removeAt from "./removeAt.ts.js";

describe("removeAt", () => {
  it("should remove the element specified by index", () => {
    expect(removeAt(3)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 5, 6]);
  });

  it("should return empty array when given empty array", () => {
    expect(removeAt(3)([])).toEqual([]);
  });
});
