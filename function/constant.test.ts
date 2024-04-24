import constant from "./constant.js";

describe("constant", () => {
  it("returns the given constant no matter the input", () => {
    expect(constant(3)("anything")).toBe(3);
  });
});
