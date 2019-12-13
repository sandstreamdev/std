/* eslint-env browser, node */
export const toByteString = bytes =>
  bytes.map(_ => String.fromCharCode(_)).join("");

export const fromByteString = byteString =>
  [...byteString].map(_ => _.codePointAt(0));

const ENCODING = "utf-8";

const btoaImplementation = text =>
  typeof window !== "undefined"
    ? btoa(toByteString([...new window.TextEncoder().encode(text)]))
    : Buffer.from(text, ENCODING).toString("base64");

const atobImplementation = text =>
  typeof window !== "undefined"
    ? new window.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export const encode = text =>
  btoaImplementation(text)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

export const decode = text =>
  atobImplementation(text.replace(/-/g, "+").replace(/_/g, "/"));

export const toBase64Url = base64 =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");

export const fromBase64Url = base64 =>
  base64.replace(/-/g, "+").replace(/_/g, "/");

export const encodeBytes = bytes => {
  const sourceText = toByteString(bytes);

  return encode(sourceText);
};

export const decodeBytes = text => {
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
