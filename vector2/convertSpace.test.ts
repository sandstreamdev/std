/* eslint-env jest */
// @ts-ignore ambiguous import
import convertSpace from "./convertSpace.ts";

// @ts-ignore ambiguous import
import rotate from "./rotate.ts";

describe("convertSpace", () => {
  it("applies given transformations to the vector", () => {
    const vector = [2, 3];
    const angle = Math.PI;
    const space = rotate(angle);

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(-2, 5);
    expect(y).toBeCloseTo(-3, 5);
  });
});
