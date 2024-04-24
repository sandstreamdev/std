import sub from "./sub.js";
import dot from "./dot.js";

export default (a, v) => {
  const [ax, ay] = a;
  const selfDot = dot(a, a);

  return sub(v, [
    (ax * 2 * dot(v, a)) / selfDot,
    (ay * 2 * dot(v, a)) / selfDot
  ]);
};
