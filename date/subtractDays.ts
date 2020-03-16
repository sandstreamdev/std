import clone from "./clone";

export default (sourceDate: Date, numberOfDays: number): Date => {
  const date = clone(sourceDate);

  date.setDate(date.getDate() - numberOfDays);

  return date;
};
