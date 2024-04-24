import integer from "./integer";
import nonNullable from "./nonNullable";

export default (x?: unknown) =>
  nonNullable(x) && integer(x) && (x as number) >= 0 && (x as number) <= 255;
