/* eslint-env jest */
// @ts-ignore ambiguous import
import openInNewTabIntent from "./openInNewTabIntent.ts";

describe("openInNewTabIntent", () => {
  it("handles CTRL key", () => {
    const event = {
      ctrlKey: true
    };

    expect(openInNewTabIntent(event)).toBe(true);
  });

  it("handles SHIFT key", () => {
    const event = {
      shiftKey: true
    };

    expect(openInNewTabIntent(event)).toBe(true);
  });

  it("handles META key", () => {
    const event = {
      metaKey: true
    };

    expect(openInNewTabIntent(event)).toBe(true);
  });

  it("handles middle mouse button clicks", () => {
    const event = {
      button: 1
    };

    expect(openInNewTabIntent(event)).toBe(true);
  });

  it("returns false otherwise", () => {
    const event = {
      button: 0
    };

    expect(openInNewTabIntent(event)).toBe(false);
  });
});
