/* eslint-env browser, node */
import fromByteString from "../byteString/from";
import { DecodeContext } from "./DecodeContext.interface";

const ENCODING = "utf-8";

const atobImplementation = (
  text: string,
  context: DecodeContext | undefined = typeof window !== "undefined"
    ? window
    : undefined
) =>
  context
    ? new context.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(context.atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export default (text: string, context?: DecodeContext) =>
  atobImplementation(text.replace(/-/g, "+").replace(/_/g, "/"), context);
