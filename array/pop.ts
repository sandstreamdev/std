import take from "./take";

export default (xs: any[]) => take(xs.length - 1)(xs);
