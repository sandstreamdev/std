import isObject from "../is/object.js";
import map from "./map.js";

const isNonNullishObject = x => x !== undefined && x !== null && isObject(x);

const merge = (a, b) => ({
...a,
...map((value, key) =>
isNonNullishObject(value) && isNonNullishObject(a[key])
? merge(a[key], value)
: value
)(b)
});

export default merge;
