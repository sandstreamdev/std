export default (from, to) => date => {
  const timestamp = date.valueOf();
  const fromTimestamp = from.valueOf();
  const toTimestamp = to.valueOf();

  return timestamp >= fromTimestamp && timestamp <= toTimestamp;
};
