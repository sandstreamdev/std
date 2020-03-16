export default (source, showSeconds) => {
  const [hours, minutes, seconds] = source.map(_ => `${_}`);
  const padded = [hours, minutes, seconds].map(x => x.padStart(2, "0"));
  const [paddedHours, paddedMinutes] = padded;
  const parts = showSeconds ? padded : [paddedHours, paddedMinutes];

  return parts.join(":");
};
