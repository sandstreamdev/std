/* eslint-env jest */
// @ts-ignore ambiguous import
import mul from "./mul.ts";

// @ts-ignore ambiguous import
import scale from "./scale.ts";

describe("mul", () => {
  it("applies matrix transformation to the given vector", () => {
    const vector = [2, 3];
    const space = scale(4, 5);

    const [x, y] = mul(space, vector);

    expect(x).toBeCloseTo(8, 5);
    expect(y).toBeCloseTo(15, 5);
  });
});
