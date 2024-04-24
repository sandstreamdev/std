import leapYear from "./leapYear.js";

export default year => (leapYear(year) ? 366 : 365);
