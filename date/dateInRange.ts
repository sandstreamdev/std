export default (from: string | Date, to: string | Date) => (
  date = new Date()
): boolean => {
  const dateTime = new Date(date).getTime();
  const fromTime = new Date(from).getTime();
  const toTime = new Date(to).getTime();

  return dateTime >= fromTime && dateTime <= toTime;
};
