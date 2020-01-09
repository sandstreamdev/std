/* eslint-env browser, node */
import toByteString from "../byteString/to";
import { EncodeContext } from "./EncodeContext";

const toArray = (typedArray: Uint8Array): number[] => [...typedArray];

const ENCODING = "utf-8";

const btoaImplementation = (
  text: string,
  context: EncodeContext | undefined = typeof window !== "undefined"
    ? window
    : undefined
) =>
  context
    ? context.btoa(
        toByteString(toArray(new context.TextEncoder().encode(text)))
      )
    : Buffer.from(text, ENCODING).toString("base64");

export default (text: string, context?: EncodeContext) =>
  btoaImplementation(text, context)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
