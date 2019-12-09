/* eslint-env commonjs */

module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["**/*.ts"],
  coveragePathIgnorePatterns: ["\\.d\\.ts$", "index\\.ts"],
  coverageDirectory: ".coverage"
};
