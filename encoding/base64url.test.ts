/* eslint-env jest, node */
import encode from "./base64url/encode.js";
import decode from "./base64url/decode.js";
import encodeBytes from "./base64url/encodeBytes.js";
import decodeBytes from "./base64url/decodeBytes.js";
import toBase64 from "./base64url/toBase64.js";
import fromBase64 from "./base64url/fromBase64.js";
import fromByteString from "./byteString/from.js";
import toByteString from "./byteString/to.js";

import range from "../array/range.js";

const bytes = [
  104, 201, 31, 1, 54, 60, 36, 154, 46, 88, 206, 206, 8, 107, 19, 154, 43, 146,
  30, 192, 183, 212, 234, 155, 167, 244, 230, 228, 232, 161, 74, 180
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

  it("properly replaces non-URL-safe characters", () => {
    expect(encode("<<???>>")).toEqual("PDw_Pz8-Pg");
    expect(Buffer.from("<<???>>", "utf-8").toString("base64")).toEqual(
      "PDw/Pz8+Pg=="
    );
    expect(decode(encode("<<???>>"))).toEqual("<<???>>");
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

  it("encodes/decodes bytes", () => {
    const bytes = [0xc2, 0x67, 0xeb, 0xa7, 0x6d, 0x3e, 0x6c, 0x1b, 0x10, 0x7c];

    const encoded = "w4Jnw6vCp20-bBsQfA";

    expect(encodeBytes(bytes)).toEqual(encoded);
    expect(decodeBytes(encoded)).toEqual(bytes);
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
    const base64url = encode(text);
    const encoded = toBase64(base64url);
    const expected = Buffer.from(text, "utf-8").toString("base64");

    expect(encoded).toEqual(expected);
  });

  it("fromBase64 strips padding characters", () => {
    expect(fromBase64("PDw/Pz8+Pg==")).toEqual("PDw_Pz8-Pg");
  });

  it("toBase64 adds padding characters when needed", () => {
    expect(toBase64("PDw_Pz8-Pg")).toEqual("PDw/Pz8+Pg==");
  });

  it("converts base64 to base64URL and vice versa", () => {
    const base64 = "PDw/Pz8+Pg==";
    const base64url = "PDw_Pz8-Pg";

    expect(fromBase64(base64)).toEqual(base64url);
    expect(toBase64(base64url)).toEqual(base64);
  });

  it("encodes/decodes bytes to and from string", () => {
    const bytes = [0x50, 0x51, 0x52];

    const encoded = "PQR";

    expect(toByteString(bytes)).toEqual(encoded);
    expect(fromByteString(encoded)).toEqual(bytes);
  });
});
