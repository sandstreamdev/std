import length from "./length";

export default (xs?: object): boolean => (xs ? length(xs) > 0 : false);
