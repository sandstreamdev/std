import integer from "./integer.js";

export default x => integer(x) && x >= 0 && x <= 255;
