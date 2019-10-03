import endOfYear from "./endOfYear.js";
import offsetByBit from "./offsetByBit.js";
import splitDateTime from "./splitDateTime.js";
import startOfYear from "./startOfYear.js";
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
    convert(startOfYear(date || now, timezoneOffset, local))
  );
  const [end] = splitDateTime(
    convert(offsetByBit(endOfYear(date || now, timezoneOffset, local)))
  );

  return [start, end];
};
