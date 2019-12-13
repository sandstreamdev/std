/* eslint-env jest */
// @ts-ignore ambiguous import
import add from "./add.ts";

describe("add", () => {
  it("adds two vectors together", () => {
    expect(add([3, 5], [-1, 8])).toEqual([2, 13]);
  });
});
