/* eslint-env jest */
// @ts-ignore ambiguous import
import translate from "./translate.ts";

// @ts-ignore ambiguous import
import convertSpace from "./convertSpace.ts";

describe("translate", () => {
  it("creates a scale transform", () => {
    expect(translate(2, 3)).toEqual({
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 2,
      f: 3
    });
  });

  it("allows to translate a vector", () => {
    const vector = [2, 3];
    const space = translate(4, 5);

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(6, 5);
    expect(y).toBeCloseTo(8, 5);
  });

  it("translates by 0 by default", () => {
    const vector = [2, 3];
    const space = translate();

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(2, 5);
    expect(y).toBeCloseTo(3, 5);
  });

  it("translates uniformly by default", () => {
    const vector = [2, 3];
    const space = translate(3);

    const [x, y] = convertSpace(space)(vector);

    expect(x).toBeCloseTo(5, 5);
    expect(y).toBeCloseTo(6, 5);
  });
});
