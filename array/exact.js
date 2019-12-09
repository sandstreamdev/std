import range from "./range.js";

export default n => xs => range(n).map(index => xs[index]);
