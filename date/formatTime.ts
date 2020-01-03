import toLocalDateTime from "./toLocalDateTime";
import displayTime from "./displayTime";

export default (sourceDate: Date, showSeconds = false, timezoneOffset = 0) => {
  const localDate = toLocalDateTime(sourceDate, timezoneOffset);

  const [hours, minutes, seconds] = [
    localDate.getUTCHours(),
    localDate.getUTCMinutes(),
    localDate.getUTCSeconds()
  ];

  return displayTime([hours, minutes, seconds], showSeconds);
};
