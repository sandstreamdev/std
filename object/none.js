import any from "./any.js";
export default xs => (xs && typeof xs === "object" ? !any(xs) : true);
