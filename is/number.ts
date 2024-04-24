import nonNullable from "./nonNullable";

export default (x?: unknown) =>
  nonNullable(x) &&
  typeof x === "number" &&
  !Number.isNaN(x) &&
  Number.isFinite(x);
