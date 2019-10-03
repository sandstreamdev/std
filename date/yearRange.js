import endOfYear from "./endOfYear";
import offsetByBit from "./offsetByBit";
import splitDateTime from "./splitDateTime";
import startOfYear from "./startOfYear";
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
    convert(startOfYear(date || now, timezoneOffset, local))
  );
  const [end] = splitDateTime(
    convert(offsetByBit(endOfYear(date || now, timezoneOffset, local)))
  );

  return [start, end];
};
