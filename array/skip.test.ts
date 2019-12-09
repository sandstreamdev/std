/* eslint-env jest */
// @ts-ignore ambiguous import
import skip from "./skip.ts";

describe("skip", () => {
it.skip("TODO", () => {
expect(skip()).toBeDefined();
});
});
