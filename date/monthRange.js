import endOfMonth from "./endOfMonth";
import offsetByBit from "./offsetByBit";
import splitDateTime from "./splitDateTime";
import startOfMonth from "./startOfMonth";
import toISO from "./toISO";
import toISOFromLocalDateTime from "./toISOFromLocalDateTime";

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
