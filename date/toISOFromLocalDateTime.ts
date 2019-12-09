import fromMinutes from "./fromMinutes";

export default date =>
  new Date(
    date.valueOf() - fromMinutes(date.getTimezoneOffset())
  ).toISOString();
