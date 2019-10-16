import multiply from "./multiply";

export default (...matrices) => matrices.reduce(multiply);
