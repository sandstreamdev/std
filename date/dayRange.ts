import endOfDay from "./endOfDay";
import offsetByBit from "./offsetByBit";
import splitDateTime from "./splitDateTime";
import startOfDay from "./startOfDay";
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
convert(startOfDay(date || now, timezoneOffset, local))
);

const [end] = splitDateTime(
convert(offsetByBit(endOfDay(date || now, timezoneOffset, local)))
);

return [start, end];
};
