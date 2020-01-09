import toLocalDateTime from "./toLocalDateTime.js";
import displayMonth from "./displayMonth.js";

export default (sourceDate, showDay = false, timezoneOffset = 0) => {
  const localDate = toLocalDateTime(sourceDate, timezoneOffset);
  const day = localDate.getDate();
  const monthIndex = localDate.getMonth();
  const year = localDate.getFullYear();

  return [showDay && day, displayMonth(monthIndex), year]
    .filter(Boolean)
    .join(" ");
};