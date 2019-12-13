/* eslint-env jest */
// @ts-ignore ambiguous import
import noOp from "./noOp.ts";

describe("noOp", () => {
  it("does nothing", () => {
    expect(noOp()).toBe(undefined);
  });
});
