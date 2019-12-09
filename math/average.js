import sum from "../array/sum.js";

export default xs => (xs && xs.length > 0 ? sum(xs) / xs.length : 0);
