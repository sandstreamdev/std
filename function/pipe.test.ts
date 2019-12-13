/* eslint-env jest */
// @ts-ignore ambiguous import
import pipe from "./pipe.ts";

const square = (x: number) => x * x;
const addOne = (x: number) => x + 1;

describe("pipe", () => {
  it("pipes value through given functions", () => {
    expect(pipe(square, addOne)(3)).toBe(10);
  });
});
