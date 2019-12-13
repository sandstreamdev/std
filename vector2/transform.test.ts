/* eslint-env jest */
// @ts-ignore ambiguous import
import transform from "./transform.ts";

// @ts-ignore ambiguous import
import rotate from "./rotate.ts";

// @ts-ignore ambiguous import
import translate from "./translate.ts";

describe("transform", () => {
  it("multiplies multiple transformation into a single matrix", () => {
    const originX = 5;
    const originY = 6;
    const angle = Math.PI;

    expect(
      transform(
        translate(originX, originY),
        rotate(angle),
        translate(-originX, -originY)
      )
    ).toEqual(rotate(Math.PI, originX, originY));
  });
});
