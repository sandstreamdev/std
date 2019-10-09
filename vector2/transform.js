import multiply from "./multiply.js";

export default (...matrices) => matrices.reduce(multiply);
