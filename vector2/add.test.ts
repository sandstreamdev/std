import add from "./add.js";

describe("add", () => {
  it("adds two vectors", () => {
    expect(add([3, 5], [-1, 8])).toEqual([2, 13]);
  });
});
