import sub from "./sub.js";

describe("sub", () => {
  it("subtracts two vectors", () => {
    expect(sub([3, 5], [-1, 8])).toEqual([4, -3]);
  });
});
