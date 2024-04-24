import decode from "./decode.js";
import fromByteString from "../byteString/from.js";
export default (text, context) => {
  const decoded = decode(text, context);
  return fromByteString(decoded);
};
