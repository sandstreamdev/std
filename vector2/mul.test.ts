import mul from "./mul.js";

import scale from "./scale.js";

describe("mul", () => {
  it("applies matrix transformation to the given vector", () => {
    const vector = [2, 3];
    const space = scale(4, 5);

    const [x, y] = mul(space, vector);

    expect(x).toBeCloseTo(8, 5);
    expect(y).toBeCloseTo(15, 5);
  });
});
