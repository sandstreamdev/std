export default (sourceDate, numberOfDays) => {
  const date = new Date(sourceDate);
  date.setDate(date.getDate() - numberOfDays);
  return date;
};
