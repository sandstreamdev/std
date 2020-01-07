import nonNullable from "./nonNullable";

export default (x?: any) =>
  nonNullable(x) &&
  typeof x === "number" &&
  !Number.isNaN(x) &&
  Number.isFinite(x);
