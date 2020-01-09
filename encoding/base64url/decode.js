/* eslint-env browser, node */
import fromByteString from "../byteString/from.js";

const ENCODING = "utf-8";

const atobImplementation = (
  text,
  context = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? new context.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(context.atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export default (text, context) =>
  atobImplementation(text.replace(/-/g, "+").replace(/_/g, "/"), context);
