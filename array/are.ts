import is from "./is";

export default (...xs: any[]): boolean => xs.every(is);
