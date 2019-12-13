/* eslint-env jest */
// @ts-ignore ambiguous import
import compose from "./compose.ts";

const square = (x: number) => x * x;
const addOne = (x: number) => x + 1;

describe("compose", () => {
  it("composes functions", () => {
    expect(compose(square, addOne)(3)).toBe(16);
  });
});
