/* eslint-env jest */
// @ts-ignore ambiguous import
import unique from "./unique.ts";

describe("unique", () => {
  it("removes duplicated values", () => {
    expect(unique([1, 2, 3, 4, 3, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("removes all the duplicated values when there are any", () => {
    expect(unique([1, 2, 3, 4, 3, 4, 3, 6])).toEqual([1, 2, 3, 4, 6]);
  });

  it("return the equal array when there are no duplicated", () => {
    expect(unique([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
