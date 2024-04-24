import clone from "./clone.js";

export default date => {
  const copy = clone(date);
  copy.setHours(0, 0, 0, 0);

  return copy;
};
