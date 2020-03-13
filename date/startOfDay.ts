import clone from "./clone";

export default (date: Date) => {
  const copy = clone(date);

  copy.setHours(0, 0, 0, 0);

  return copy;
};
