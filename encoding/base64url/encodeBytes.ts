/* eslint-env browser, node */
import encode from "./encode";
import toByteString from "../byteString/to";
import { EncodeContext } from "./EncodeContext";

export const encodeBytes = (bytes: number[], context?: EncodeContext) => {
  const sourceText = toByteString(bytes);

  return encode(sourceText, context);
};
