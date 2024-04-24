import encode from "./encode.js";
import toByteString from "../byteString/to.js";
export default (bytes, context) => {
  const sourceText = toByteString(bytes);
  return encode(sourceText, context);
};
