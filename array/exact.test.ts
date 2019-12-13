/* eslint-env jest */
// @ts-ignore ambiguous import
import exact from "./exact.ts";

describe("exact", () => {
  it("takes exactly the given count of items and fills blanks with undefined values", () => {
    expect(exact(5)([1, 2, 3])).toEqual([1, 2, 3, undefined, undefined]);
  });
});
