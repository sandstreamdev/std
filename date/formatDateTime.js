import formatDate from "./formatDate.js";
import formatTime from "./formatTime.js";

export default (sourceDate, showSeconds = false) => {
  const date = formatDate(sourceDate);
  const time = formatTime(sourceDate, showSeconds);

  return `${date} ${time}`;
};
