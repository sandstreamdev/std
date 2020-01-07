export default (sourceDate: string | number | Date, numberOfDays: number) => {
  const date = new Date(sourceDate);

  date.setDate(date.getDate() - numberOfDays);

  return date;
};
