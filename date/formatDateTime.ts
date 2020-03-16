import formatDate from "./formatDate";
import formatTime from "./formatTime";

export default (sourceDate: Date, showSeconds = false) => {
  const date = formatDate(sourceDate);
  const time = formatTime(sourceDate, showSeconds);

  return `${date} ${time}`;
};
