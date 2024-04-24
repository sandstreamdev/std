import dot from "./dot.js";

describe("dot", () => {
  it("calculates a dot product", () => {
    expect(dot([3, 5], [-1, 8])).toBe(37);

    expect(dot([3, 5], [-1, -8])).toEqual(-43);
  });
});
