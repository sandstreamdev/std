export default (source: [number, number, number], showSeconds: boolean) => {
  const [hours, minutes, seconds] = source.map(_ => _ + "");

  const padded = [
    hours.padStart(2, "0"),
    minutes.padStart(2, "0"),
    seconds.padStart(2, "0")
  ];

  const [paddedHours, paddedMinutes] = padded;
  const parts = showSeconds ? padded : [paddedHours, paddedMinutes];

  return parts.join(":");
};
