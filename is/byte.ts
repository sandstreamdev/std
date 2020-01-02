import integer from "./integer";

export default (x?: number) => integer(x) && x >= 0 && x <= 255;
