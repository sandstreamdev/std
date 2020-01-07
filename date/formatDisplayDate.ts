import toLocalDateTime from "./toLocalDateTime";
import displayMonth from "./displayMonth";

export default (sourceDate: Date, showDay = false, timezoneOffset = 0) => {
  const localDate = toLocalDateTime(sourceDate, timezoneOffset);
  const day = localDate.getDate();
  const monthIndex = localDate.getMonth();
  const year = localDate.getFullYear();

  return [showDay && day, displayMonth(monthIndex), year]
    .filter(Boolean)
    .join(" ");
};
