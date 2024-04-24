import toByteString from "../byteString/to.js";
const toArray = typedArray => [...typedArray];
const ENCODING = "utf-8";
const btoaImplementation = (
  text,
  context = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? context.btoa(
        toByteString(toArray(new context.TextEncoder().encode(text)))
      )
    : Buffer.from(text, ENCODING).toString("base64");
export default (text, context) =>
  btoaImplementation(text, context)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
