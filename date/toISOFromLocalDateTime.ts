import fromMinutes from "./fromMinutes";

export default (date: Date) =>
  new Date(
    date.valueOf() - fromMinutes(date.getTimezoneOffset())
  ).toISOString();
