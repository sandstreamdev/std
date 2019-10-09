import fromMinutes from "./fromMinutes.js";
export default (date, timezoneOffset = 0) =>
  new Date(date.valueOf() - fromMinutes(timezoneOffset));
