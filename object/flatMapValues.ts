import flatMap from "../array/flatMap";
import entries from "./entries";

export default f => xs =>
  flatMap(([key, value]) => f(value, key, xs))(entries(xs));
