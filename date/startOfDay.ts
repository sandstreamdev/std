import toLocalDateTime from "./toLocalDateTime";

export default (date, timezoneOffset = 0, local = true) => {
const newDate = new Date(date);
newDate.setHours(0, 0, 0, 0);

return local
? toLocalDateTime(newDate, timezoneOffset + newDate.getTimezoneOffset())
: newDate;
};
