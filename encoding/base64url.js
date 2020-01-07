/* eslint-env browser, node */
const toArray = typedArray => [...typedArray];

export const toByteString = bytes =>
  bytes.map(_ => String.fromCharCode(_)).join("");

export const fromByteString = byteString =>
  [...byteString].map(_ => _.codePointAt(0) || 0);

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

const atobImplementation = (
  text,
  context = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? new context.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(context.atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export const encode = (text, context) =>
  btoaImplementation(text, context)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

export const decode = (text, context) =>
  atobImplementation(text.replace(/-/g, "+").replace(/_/g, "/"), context);

export const toBase64Url = base64 =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");

export const fromBase64Url = base64 =>
  base64.replace(/-/g, "+").replace(/_/g, "/");

export const encodeBytes = (bytes, context) => {
  const sourceText = toByteString(bytes);

  return encode(sourceText, context);
};

export const decodeBytes = (text, context) => {
  const decoded = decode(text, context);

  return fromByteString(decoded);
};

export default {
  decode,
  decodeBytes,
  encode,
  encodeBytes,
  fromByteString,
  toByteString
};
