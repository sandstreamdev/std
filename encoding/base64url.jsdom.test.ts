/* eslint-env jest, node */
// @ts-ignore ambiguous import
import encode from "./base64url/encode.ts";
// @ts-ignore ambiguous import
import decode from "./base64url/decode.ts";

const unicodeText = "Zombies everywhere 🧟";

describe("base64url", () => {
  it("works in browsers using provided atob/btoa", () => {
    const atob = (encodedString: string) => {
      let data = encodedString.replace(/[ \t\n\f\r]/g, "");

      if (data.length % 4 === 0) {
        data = data.replace(/==?$/, "");
      }

      if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) {
        return null;
      }

      let output = "";

      let buffer = 0;
      let accumulatedBits = 0;

      for (let i = 0; i < data.length; i++) {
        buffer <<= 6;
        buffer |= atobLookup(data[i]);
        accumulatedBits += 6;

        if (accumulatedBits === 24) {
          output += String.fromCharCode((buffer & 0xff0000) >> 16);
          output += String.fromCharCode((buffer & 0xff00) >> 8);
          output += String.fromCharCode(buffer & 0xff);
          buffer = accumulatedBits = 0;
        }
      }

      if (accumulatedBits === 12) {
        buffer >>= 4;
        output += String.fromCharCode(buffer);
      } else if (accumulatedBits === 18) {
        buffer >>= 2;
        output += String.fromCharCode((buffer & 0xff00) >> 8);
        output += String.fromCharCode(buffer & 0xff);
      }

      return output;
    };

    const atobLookup = (character: string) => {
      if (/[A-Z]/.test(character)) {
        return character.charCodeAt(0) - "A".charCodeAt(0);
      } else if (/[a-z]/.test(character)) {
        return character.charCodeAt(0) - "a".charCodeAt(0) + 26;
      } else if (/[0-9]/.test(character)) {
        return character.charCodeAt(0) - "0".charCodeAt(0) + 52;
      } else if (character === "+") {
        return 62;
      } else if (character === "/") {
        return 63;
      }

      throw new RangeError("Character out of range.");
    };

    const btoa = (rawString: string) => {
      const s = rawString;

      for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) {
          return null;
        }
      }

      let out = "";

      for (let i = 0; i < s.length; i += 3) {
        const groupsOfSix = [undefined, undefined, undefined, undefined];
        groupsOfSix[0] = s.charCodeAt(i) >> 2;
        groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;

        if (s.length > i + 1) {
          groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
          groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
        }

        if (s.length > i + 2) {
          groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
          groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
        }

        for (let j = 0; j < groupsOfSix.length; j++) {
          if (typeof groupsOfSix[j] === "undefined") {
            out += "=";
          } else {
            out += btoaLookup(groupsOfSix[j]);
          }
        }
      }

      return out;
    };

    const btoaLookup = (index: number) => {
      if (index >= 0 && index < 26) {
        return String.fromCharCode(index + "A".charCodeAt(0));
      } else if (index < 52) {
        return String.fromCharCode(index - 26 + "a".charCodeAt(0));
      } else if (index < 62) {
        return String.fromCharCode(index - 52 + "0".charCodeAt(0));
      } else if (index === 62) {
        return "+";
      } else if (index === 63) {
        return "/";
      }

      throw new RangeError("Index out of range.");
    };

    const context = {
      atob,
      btoa,
      TextEncoder: global["TextEncoder"],
      TextDecoder: global["TextDecoder"]
    };

    expect(decode(encode(unicodeText, context), context)).toEqual(unicodeText);

    global["window"] = context;

    expect(decode(encode(unicodeText))).toEqual(unicodeText);

    delete global["window"];
  });
});
