import number from "./number";

export default (x?: number) => number(x) && Math.floor(x) === x;
