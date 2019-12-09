import sum from "../array/sum.js";
import daysInMonths from "./daysInMonths.js";
import leapYear from "./leapYear.js";

export default year => sum(daysInMonths(leapYear(year)));
