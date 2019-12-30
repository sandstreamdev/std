/* eslint-env jest */
// @ts-ignore ambiguous import
import insert from "./insert.ts";

describe("insert", () => {
  it("should insert item to the array on the second position", () => {
    expect(insert(1, 0)([1, 2, 3])).toEqual([1, 0, 2, 3]);
    expect(insert(-2, 0)([1, 2, 3])).toEqual([1, 0, 2, 3]);
  });

  it("should insert item to the array on the first position", () => {
    expect(insert(0, 2)([1])).toEqual([2, 1]);
    expect(insert(-1, 2)([1])).toEqual([2, 1]);
  });

  it("should insert item to empty array on the first position", () => {
    expect(insert(10, 1)([])).toEqual([1]);
    expect(insert(0, 1)([])).toEqual([1]);
    expect(insert(-10, 1)([])).toEqual([1]);
  });
});
