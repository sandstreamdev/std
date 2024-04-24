import is from "./is";

export default <T>(...xs: T[]): boolean => xs.every(is);
