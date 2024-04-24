import take from "./take";

export default <T>(xs: T[]): T[] => take(xs.length - 1)(xs);
