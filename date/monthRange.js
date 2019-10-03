import endOfMonth from "./endOfMonth.js";
import offsetByBit from "./offsetByBit.js";
import splitDateTime from "./splitDateTime.js";
import startOfMonth from "./startOfMonth.js";
import toISO from "./toISO.js";
import toISOFromLocalDateTime from "./toISOFromLocalDateTime.js";

export default ({
  iso = false,
  local = true,
  now = new Date(),
  timezoneOffset = 0
}) => date => {
  const convert = iso ? toISO : toISOFromLocalDateTime;

  const [start] = splitDateTime(
    convert(startOfMonth(date || now, timezoneOffset, local))
  );
  const [end] = splitDateTime(
    convert(offsetByBit(endOfMonth(date || now, timezoneOffset, local)))
  );

  return [start, end];
};
