import number from "./number";
import nonNullable from "./nonNullable";

export default (x?: number) => nonNullable(x) && number(x) && x >= 0 && x <= 1;
