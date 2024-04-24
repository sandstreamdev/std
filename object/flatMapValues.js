import flatMap from "../array/flatMap.js";
import entries from "./entries.js";

export default f => xs =>
  flatMap(input => {
    const keyValuePair = input;
    const [key, value] = keyValuePair;

    return f(value, key, xs);
  })(entries(xs));
