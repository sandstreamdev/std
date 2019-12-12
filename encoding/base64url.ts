/* eslint-env browser, node */

export const toByteString = bytes =>
  bytes.map(_ => String.fromCharCode(_)).join("");

export const fromByteString = (byteString: string) =>
  [...byteString].map(_ => _.codePointAt(0));

const ENCODING = "utf-8";

const btoaImplementation = (text: string) =>
  typeof window !== "undefined"
    ? btoa(toByteString([...new window.TextEncoder().encode(text)]))
    : Buffer.from(text, ENCODING).toString("base64");

const atobImplementation = (text: string) =>
  typeof window !== "undefined"
    ? new window.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export const encodeString = (text: string) =>
  btoaImplementation(text)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

export const decodeString = (text: string) =>
  atobImplementation(text.replace(/\-/g, "+").replace(/_/g, "/"));

export const toBase64Url = (base64: string) =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");

export const fromBase64Url = (base64: string) =>
  base64.replace(/-/g, "+").replace(/_/g, "/");

export const encode = (bytes: number[]) => {
  const sourceText = toByteString(bytes);

  return encodeString(sourceText);
};

export const decode = (text: string) => {
  const decoded = decodeString(text);

  return fromByteString(decoded);
};
