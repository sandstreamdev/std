export default (from: Date, to: Date) =>
  (date: Date): boolean => {
    const timestamp = date.valueOf();
    const fromTimestamp = from.valueOf();
    const toTimestamp = to.valueOf();

    return timestamp >= fromTimestamp && timestamp <= toTimestamp;
  };
