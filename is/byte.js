import integer from "./integer.js";
import nonNullable from "./nonNullable.js";
export default x => nonNullable(x) && integer(x) && x >= 0 && x <= 255;
