module.exports = {
  env: {
    es6: true
  },
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "no-sparse-arrays": 0
  }
};
