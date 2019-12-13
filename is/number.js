export default x =>
  typeof x === "number" && !Number.isNaN(x) && Number.isFinite(x);
