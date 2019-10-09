import fromMinutes from "./fromMinutes.js";
export default date =>
  new Date(
    date.valueOf() - fromMinutes(date.getTimezoneOffset())
  ).toISOString();
