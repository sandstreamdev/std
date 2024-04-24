import nonNullable from "./nonNullable.js";

export default x =>
  nonNullable(x) &&
  typeof x === "number" &&
  !Number.isNaN(x) &&
  Number.isFinite(x);
