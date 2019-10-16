/* eslint-env commonjs */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts'],
  coveragePathIgnorePatterns: ["\\.d\\.ts$", "index\\.ts"],
  coverageDirectory: '.coverage'
};
