import integer from "./integer";

export default x => integer(x) && x >= 0 && x <= 255;
