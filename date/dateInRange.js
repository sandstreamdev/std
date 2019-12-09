export default (from, to) => (date = new Date()) => {
  const dateTime = new Date(date).getTime();
  const fromTime = new Date(from).getTime();
  const toTime = new Date(to).getTime();

  return dateTime >= fromTime && dateTime <= toTime;
};
