/* eslint-env browser, node */
import decode from "./decode";
import fromByteString from "../byteString/from";
import { DecodeContext } from "./DecodeContext";

export const decodeBytes = (text: string, context?: DecodeContext) => {
  const decoded = decode(text, context);

  return fromByteString(decoded);
};
