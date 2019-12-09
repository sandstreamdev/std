import transform from "./transform";
import translate from "./translate";

const { cos, sin } = Math;

export default (angle = 0, cx = 0, cy = 0) => {
  const cosAngle = cos(angle);
  const sinAngle = sin(angle);

  const rotationMatrix = {
    a: cosAngle,
    c: -sinAngle,
    e: 0,
    b: sinAngle,
    d: cosAngle,
    f: 0
  };

  return transform(translate(cx, cy), rotationMatrix, translate(-cx, -cy));
};
