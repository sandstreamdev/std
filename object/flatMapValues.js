import flatMap from "../array/flatMap.js";
import entries from "./entries.js";

export default f => xs =>
  flatMap(([key, value]) => f(value, key, xs))(entries(xs));
