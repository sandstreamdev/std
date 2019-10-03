import endOfWeek from "./endOfWeek";
import offsetByBit from "./offsetByBit";
import splitDateTime from "./splitDateTime";
import startOfWeek from "./startOfWeek";
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
    convert(startOfWeek(date || now, timezoneOffset, local))
  );
  const [end] = splitDateTime(
    convert(offsetByBit(endOfWeek(date || now, timezoneOffset, local)))
  );

  return [start, end];
};
