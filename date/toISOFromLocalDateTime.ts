import fromMinutes from "./fromMinutes";

export default (date: Date): string =>
  new Date(
    date.valueOf() - fromMinutes(date.getTimezoneOffset())
  ).toISOString();
