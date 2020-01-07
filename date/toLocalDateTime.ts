import fromMinutes from "./fromMinutes";

export default (date: Date, timezoneOffset: number = 0) =>
  new Date(date.valueOf() - fromMinutes(timezoneOffset));
