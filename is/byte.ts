import integer from "./integer";
import nonNullable from "./nonNullable";

export default (x?: number) =>
  nonNullable(x) && integer(x) && x >= 0 && x <= 255;
