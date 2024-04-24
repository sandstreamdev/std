import take from "./take.js";

export default xs => take(xs.length - 1)(xs);
