import toLocalDateTime from "./toLocalDateTime.js";

export default (sourceDate, timezoneOffset = 0) => {
  const localDate = toLocalDateTime(sourceDate, timezoneOffset);

  const [m, a, y] = [
    localDate.getUTCMonth() + 1,
    localDate.getUTCDate(),
    localDate.getUTCFullYear()
  ].map(_ => _ + "");

  const date = [
    y.padStart(4, "0"),
    m.padStart(2, "0"),
    a.padStart(2, "0")
  ].join("-");

  return date;
};
