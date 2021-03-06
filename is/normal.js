import number from "./number.js";
import nonNullable from "./nonNullable.js";

export default x => nonNullable(x) && number(x) && x >= 0 && x <= 1;
