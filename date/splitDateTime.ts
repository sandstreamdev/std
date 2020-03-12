export default (dateTimeString: string): [string, string] => {
  const [date, time] = dateTimeString.split("T");

  return [date, time];
};
