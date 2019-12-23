/* eslint-env browser, node */

export const toByteString = bytes =>
  bytes.map(_ => String.fromCharCode(_)).join("");

export const fromByteString = (byteString: string) =>
  [...byteString].map(_ => _.codePointAt(0));

const ENCODING = "utf-8";

const btoaImplementation = (
  text: string,
  context = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? context.btoa(toByteString([...new context.TextEncoder().encode(text)]))
    : Buffer.from(text, ENCODING).toString("base64");

const atobImplementation = (
  text: string,
  context = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? new context.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(context.atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export const encode = (text: string, context) =>
  btoaImplementation(text, context)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

export const decode = (text: string, context) =>
  atobImplementation(text.replace(/-/g, "+").replace(/_/g, "/"), context);

export const toBase64Url = (base64: string) =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");

export const fromBase64Url = (base64: string) =>
  base64.replace(/-/g, "+").replace(/_/g, "/");

export const encodeBytes = (bytes: number[]) => {
  const sourceText = toByteString(bytes);

  return encode(sourceText);
};

export const decodeBytes = (text: string) => {
  const decoded = decode(text);

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
