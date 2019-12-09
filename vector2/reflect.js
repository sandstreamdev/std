import sub from "./sub.js";
import dot from "./dot.js";

export default (a, v) =>
sub(
v,
a.map(_ => (_ * 2 * dot(v, a)) / dot(a, a))
);
