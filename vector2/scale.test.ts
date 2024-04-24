import scale from "./scale.js";

import convertSpace from "./convertSpace.js";

describe("scale", () => {
  it("creates a scale transform", () => {
    expect(scale(2, 3)).toEqual({
      a: 2,
      b: 0,
      c: 0,
      d: 3,
      e: 0,
      f: 0
    });
  });

  it("allows to scale a vector", () => {
    const vector = [2, 3];
    const space = scale(4, 5);

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(8, 5);
    expect(y).toBeCloseTo(15, 5);
  });

  it("scales by 1 by default", () => {
    const vector = [2, 3];
    const space = scale();

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(2, 5);
    expect(y).toBeCloseTo(3, 5);
  });

  it("scales uniformly by default", () => {
    const vector = [2, 3];
    const space = scale(3);

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(6, 5);
    expect(y).toBeCloseTo(9, 5);
  });
});
