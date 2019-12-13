export default (x?: any) =>
  typeof x === "number" && !Number.isNaN(x) && Number.isFinite(x);
