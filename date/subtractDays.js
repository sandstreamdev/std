import clone from "./clone.js";
export default (sourceDate, numberOfDays) => {
  const date = clone(sourceDate);
  date.setDate(date.getDate() - numberOfDays);
  return date;
};
