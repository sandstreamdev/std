import leapYear from "./leapYear";

export default (year: number) => (leapYear(year) ? 366 : 365);
