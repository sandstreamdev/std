export default dateTimeString => {
  const [date, time] = dateTimeString.split("T");

  return [date, time];
};
