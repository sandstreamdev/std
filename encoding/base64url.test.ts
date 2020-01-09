/* eslint-env jest, node */
// @ts-ignore ambiguous import
import encode from "./base64url/encode.ts";
// @ts-ignore ambiguous import
import decode from "./base64url/decode.ts";
// @ts-ignore ambiguous import
import encodeBytes from "./base64url/encodeBytes.ts";
// @ts-ignore ambiguous import
import decodeBytes from "./base64url/decodeBytes.ts";
// @ts-ignore ambiguous import
import toBase64 from "./base64url/toBase64.ts";
// @ts-ignore ambiguous import
import fromBase64 from "./base64url/fromBase64.ts";
// @ts-ignore ambiguous import
import fromByteString from "./byteString/from.ts";
// @ts-ignore ambiguous import
import toByteString from "./byteString/to.ts";

// @ts-ignore ambiguous import
import range from "../array/range.ts";

const bytes = [
  104,
  201,
  31,
  1,
  54,
  60,
  36,
  154,
  46,
  88,
  206,
  206,
  8,
  107,
  19,
  154,
  43,
  146,
  30,
  192,
  183,
  212,
  234,
  155,
  167,
  244,
  230,
  228,
  232,
  161,
  74,
  180
];

const text = "Base64URL encode/decode test";

const unicodeText = "Zombies everywhere 🧟";

describe("base64url", () => {
  it("encodes given data to base64URL", () => {
    expect(encodeBytes(bytes)).toEqual(
      "aMOJHwE2PCTCmi5Yw47DjghrE8KaK8KSHsOAwrfDlMOqwpvCp8O0w6bDpMOowqFKwrQ"
    );

    expect(encode(text)).toEqual("QmFzZTY0VVJMIGVuY29kZS9kZWNvZGUgdGVzdA");
  });

  it("is does not include padding characters", () => {
    const text = "Zażółć gęślą jaźń";

    expect(encode(text) + "=").toEqual(
      Buffer.from(text, "utf-8").toString("base64")
    );
  });

  it("does not use / and + but _ and - instead", () => {
    const text = toByteString(range(256));

    expect(encode(text)).toEqual(
      Buffer.from(text, "utf-8")
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "")
    );
  });

  it("is symmetric", () => {
    expect(decodeBytes(encodeBytes(bytes))).toEqual(bytes);

    expect(decode(encode(text))).toEqual(text);
  });

  it("handles Unicode", () => {
    expect(decode(encode(unicodeText))).toEqual(unicodeText);
  });

  it("uses UTF-8 properly", () => {
    expect(fromByteString(toByteString(range(256)))).toEqual(range(256));
  });

  it("converts base64 to base64URL", () => {
    const text = toByteString(range(256));

    expect(fromBase64(Buffer.from(text, "utf-8").toString("base64"))).toEqual(
      encode(text)
    );
  });

  it("converts base64URL to base64", () => {
    const text = toByteString(range(256));

    expect(toBase64(encode(text))).toEqual(
      Buffer.from(text, "utf-8").toString("base64")
    );
  });
});
