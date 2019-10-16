/* eslint-env commonjs */

const ignoredFiles = [
  "addExtensions\\.js$",
  "compile\\.js$",
  "ignore\\.js$",
  "index\\.cjs\\.js$",
  "index\\.umd\\.js$",
  "jest\\.config\\.js$",
  "regenerate\\.js$",
  "rollup\\.config\\.js$"
];

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/*.js"],
  coveragePathIgnorePatterns: [
    "\\.d\\.ts$",
    "index\\.ts",
    "index\\.js",
    ...ignoredFiles
  ],
  coverageDirectory: ".coverage"
};
