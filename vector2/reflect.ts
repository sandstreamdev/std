import sub from "./sub";
import dot from "./dot";

export default (a, v) =>
sub(
v,
a.map(_ => (_ * 2 * dot(v, a)) / dot(a, a))
);
