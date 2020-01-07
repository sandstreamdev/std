import sum from "../array/sum";
import daysInMonths from "./daysInMonths";
import leapYear from "./leapYear";

export default (year: number) => sum(daysInMonths(leapYear(year)));
