/* eslint-env jest */
// @ts-ignore ambiguous import
import rotate from "./rotate.ts";

describe("rotate", () => {
  it("creates a rotation matrix", () => {
    const angle = Math.PI;
    const sine = Math.sin(angle);
    const cosine = Math.cos(angle);

    expect(rotate(angle)).toEqual({
      a: cosine,
      b: sine,
      c: -sine,
      d: cosine,
      e: 0,
      f: 0
    });
  });

  it("supports rotation around an origin", () => {
    const angle = Math.PI;
    const sine = Math.sin(angle);
    const cosine = Math.cos(angle);

    expect(rotate(Math.PI, 5, 3)).toEqual({
      a: cosine,
      b: sine,
      c: -sine,
      d: cosine,
      e: 10,
      f: 6
    });
  });

  it("does not perform any rotation by default", () => {
    const identityMatrix = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    };

    expect(rotate()).toEqual(identityMatrix);
  });
});
