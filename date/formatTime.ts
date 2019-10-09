import toLocalDateTime from "./toLocalDateTime";
import displayTime from "./displayTime";

export default (sourceDate, showSeconds = false, timezoneOffset = 0) => {
  const localDate = toLocalDateTime(sourceDate, timezoneOffset);

  const source = [
    localDate.getUTCHours(),
    localDate.getUTCMinutes(),
    localDate.getUTCSeconds()
  ];

  return displayTime(source, showSeconds);
};
