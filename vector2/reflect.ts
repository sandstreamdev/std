import sub from "./sub";
import dot from "./dot";

export default (a: [number, number], v: [number, number]) => {
  const [ax, ay] = a;
  const selfDot = dot(a, a);

  return sub(v, [
    (ax * 2 * dot(v, a)) / selfDot,
    (ay * 2 * dot(v, a)) / selfDot
  ]);
};
