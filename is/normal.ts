import number from "./number";

export default (x?: number) => number(x) && x >= 0 && x <= 1;
