/* eslint-env jest */
// @ts-ignore ambiguous import
import sub from "./sub.ts";

describe("sub", () => {
  it("subtracts two vectors", () => {
    expect(sub([3, 5], [-1, 8])).toEqual([4, -3]);
  });
});
