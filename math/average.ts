import sum from "../array/sum.ts";

export default (xs: number[]): number => xs && xs.length > 0 ? sum(xs) / xs.length : 0;
