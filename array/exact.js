import range from "./range.js";
export default count => xs => range(count).map(index => xs[index]);
