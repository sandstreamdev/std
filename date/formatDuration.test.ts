import formatDuration from "./formatDuration.js";
import fromHours from "./fromHours.js";
import fromMinutes from "./fromMinutes.js";
import fromSeconds from "./fromSeconds.js";

describe("formatDuration", () => {
  it("formats a duration into a padded time string", () => {
    const duration = fromHours(7) + fromMinutes(15);

    expect(formatDuration(duration)).toEqual("07:15");
  });

  it("includes seconds display if enabled", () => {
    const duration = fromHours(7) + fromMinutes(15) + fromSeconds(36);

    expect(formatDuration(duration, true)).toEqual("07:15:36");
  });

  it("should handle display of a duration greater than 24 hours", () => {
    const duration = fromHours(25);

    expect(formatDuration(duration)).toEqual("25:00");
  });

  it("should handle display of a duration bigger than a year", () => {
    const duration = 500 * fromHours(24);

    expect(formatDuration(duration)).toEqual("12000:00");
  });
});
