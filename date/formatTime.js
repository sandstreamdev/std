import toLocalDateTime from "./toLocalDateTime.js";
import displayTime from "./displayTime.js";

export default (sourceDate, showSeconds = false, timezoneOffset = 0) => {
  const localDate = toLocalDateTime(sourceDate, timezoneOffset);

  const [hours, minutes, seconds] = [
    localDate.getUTCHours(),
    localDate.getUTCMinutes(),
    localDate.getUTCSeconds()
  ];

  return displayTime([hours, minutes, seconds], showSeconds);
};
