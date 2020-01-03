import number from "./number";
import nonNullable from "./nonNullable";

export default (x?: number) =>
  nonNullable(x) && number(x) && Math.floor(x) === x;
