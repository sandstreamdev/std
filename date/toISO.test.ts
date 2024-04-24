import toISO from "./toISO.js";

describe("toISO", () => {
  it("serializes the given Date object to an ISO-compliant date-time string", () => {
    expect(toISO(new Date("2019-04-24T13:54:33.232Z"))).toBe(
      "2019-04-24T13:54:33.232Z"
    );
  });
});
