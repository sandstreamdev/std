import number from "./number";
import nonNullable from "./nonNullable";

export default (x?: unknown) =>
  nonNullable(x) && number(x) && (x as number) >= 0 && (x as number) <= 1;
