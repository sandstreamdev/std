/* eslint-env browser, node */

const toArray = (typedArray: Uint8Array): number[] => [...typedArray];

export const toByteString = (bytes: number[]) =>
  bytes.map(_ => String.fromCharCode(_)).join("");

export const fromByteString = (byteString: string) =>
  [...byteString].map(_ => _.codePointAt(0));

const ENCODING = "utf-8";

const btoaImplementation = (
  text: string,
  context: {
    btoa: (byteString: string) => string;
    TextEncoder: new () => {
      encode: { (input?: string): Uint8Array };
    };
  } = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? context.btoa(
        toByteString(toArray(new context.TextEncoder().encode(text)))
      )
    : Buffer.from(text, ENCODING).toString("base64");

const atobImplementation = (
  text: string,
  context: {
    atob: (byteString: string) => string;
    TextDecoder: new (encoding: string) => {
      decode: (input?: Uint8Array) => string;
    };
  } = typeof window !== "undefined" ? window : undefined
) =>
  context
    ? new context.TextDecoder(ENCODING).decode(
        new Uint8Array(fromByteString(context.atob(text)))
      )
    : Buffer.from(text, "base64").toString(ENCODING);

export const encode = (
  text: string,
  context?: {
    btoa: (byteString: string) => string;
    TextEncoder: new () => { encode: (input?: string) => Uint8Array };
  }
) =>
  btoaImplementation(text, context)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

export const decode = (
  text: string,
  context?: {
    atob: (byteString: string) => string;
    TextDecoder: new (encoding: string) => {
      decode: (input?: Uint8Array) => string;
    };
  }
) => atobImplementation(text.replace(/-/g, "+").replace(/_/g, "/"), context);

export const toBase64Url = (base64: string) =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");

export const fromBase64Url = (base64: string) =>
  base64.replace(/-/g, "+").replace(/_/g, "/");

export const encodeBytes = (
  bytes: number[],
  context?: {
    btoa: (byteString: string) => string;
    TextEncoder: new () => { encode: (input?: string) => Uint8Array };
  }
) => {
  const sourceText = toByteString(bytes);

  return encode(sourceText, context);
};

export const decodeBytes = (
  text: string,
  context?: {
    atob: (byteString: string) => string;
    TextDecoder: new (encoding: string) => {
      decode: (input?: Uint8Array) => string;
    };
  }
) => {
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
