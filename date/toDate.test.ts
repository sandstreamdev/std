/* eslint-env jest */
// @ts-ignore ambiguous import
import toDate from "./toDate.ts";

describe("toDate", () => {
  it("extracts padded YYYY-MM-DD date string out of the given date object", () => {
    expect(toDate(new Date("2019-01-15T12:00:00.000Z"))).toBe("2019-01-15");
  });

  it("is is computed within the local timezone", () => {
    const start = new Date("2019-01-15T00:00:00.000Z");
    const end = new Date("2019-01-15T23:59:59.999Z");
    const timezoneOffset = start.getTimezoneOffset();

    if (timezoneOffset < 0) {
      expect(toDate(start)).toBe("2019-01-15");
      expect(toDate(end)).not.toBe("2019-01-15");
    } else if (timezoneOffset > 0) {
      expect(toDate(start)).not.toBe("2019-01-15");
      expect(toDate(end)).toBe("2019-01-15");
    } else {
      expect(toDate(start)).toBe("2019-01-15");
      expect(toDate(end)).toBe("2019-01-15");
    }
  });
});
