import formatDate from "./formatDate";
import formatTime from "./formatTime";

export default (sourceDate, showSeconds = false, timezoneOffset = 0) => {
const date = formatDate(sourceDate, timezoneOffset);
const time = formatTime(sourceDate, showSeconds, timezoneOffset);

return `${date} ${time}`;
};
