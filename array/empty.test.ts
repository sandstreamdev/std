import empty from "./empty.js";

describe("empty", () => {
  it("equals to the empty array", () => {
    expect(empty).toEqual([]);
  });

  it("keeps the same reference", () => {
    expect(empty).not.toBe([]);
  });
});
