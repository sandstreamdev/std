import encode from "./encode";
import toByteString from "../byteString/to";
import { EncodeContext } from "./EncodeContext.interface";

export default (bytes: number[], context?: EncodeContext) => {
  const sourceText = toByteString(bytes);

  return encode(sourceText, context);
};
