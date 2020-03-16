import clone from "./clone";

export default (date: Date) => {
  const copy = clone(date);

  copy.setHours(24, 0, 0, 0);

  return copy;
};
