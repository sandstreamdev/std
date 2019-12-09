import range from "./range";

export default n => xs => range(n).map(index => xs[index]);
