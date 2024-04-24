import noOp from "./noOp.js";

describe("noOp", () => {
  it("does nothing", () => {
    expect(noOp()).toBe(undefined);
  });
});
