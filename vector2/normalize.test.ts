/* eslint-env jest */
// @ts-ignore ambiguous import
import normalize from "./normalize.ts";

// @ts-ignore ambiguous import
import length from "./length.ts";

describe("normalize", () => {
  it("normalized the given vector", () => {
    const vector = [2, 3];
    const magnitude = length(vector);

    expect(normalize(vector)).toEqual([2 / magnitude, 3 / magnitude]);
  });

  it("return zero vector for points", () => {
    const vector = [0, 0];

    expect(normalize(vector)).toEqual([0, 0]);
  });
});
