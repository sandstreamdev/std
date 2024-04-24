import transform from "./transform.js";

import rotate from "./rotate.js";

import translate from "./translate.js";

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
