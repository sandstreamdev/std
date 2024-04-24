import number from "./number";
import nonNullable from "./nonNullable";

export default (x?: unknown) =>
  nonNullable(x) && number(x) && Math.floor(x as number) === x;
