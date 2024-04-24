import validName from "./validName.js";

import range from "../array/range.js";

describe("validName", () => {
  it("detects reserved names", () => {
    expect(validName("con")).toBe(false);
    expect(validName("prn")).toBe(false);
    expect(validName("aux")).toBe(false);
    expect(validName("nul")).toBe(false);

    for (const postfix of range(10)) {
      expect(validName(`com${postfix}`)).toBe(false);
      expect(validName(`lpt${postfix}`)).toBe(false);
    }
  });

  it("detects path escape sequences", () => {
    expect(validName(".test")).toBe(true);
    expect(validName("./test")).toBe(false);
    expect(validName("../test")).toBe(false);
    expect(validName("/test")).toBe(false);
    expect(validName("./../test")).toBe(false);
    expect(validName("././test")).toBe(false);
  });

  it("is case insensitive", () => {
    expect(validName("NUL")).toBe(false);
  });

  it("detects invalid path characters", () => {
    expect(validName("test<sas")).toBe(false);
    expect(validName("test>sas")).toBe(false);
    expect(validName("test:sas")).toBe(false);
    expect(validName('test"sas')).toBe(false);
    expect(validName("test\\sas")).toBe(false);
    expect(validName("test/sas")).toBe(false);
    expect(validName("test|sas")).toBe(false);
    expect(validName("test?sas")).toBe(false);
    expect(validName("test*sas")).toBe(false);
    expect(validName("test\0sas")).toBe(false);
  });

  it("allows proper file names", () => {
    expect(validName("image.png")).toBe(true);
    expect(validName("DATA.bin")).toBe(true);
    expect(validName(".hidden")).toBe(true);
    expect(validName("file with spaces")).toBe(true);
    expect(validName("dashes-allowed")).toBe(true);
    expect(validName("Mixed case")).toBe(true);
    expect(validName("Zombies 🧟 and gęsi")).toBe(true);
  });
});
