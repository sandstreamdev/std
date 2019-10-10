module.exports = {
  env: {
    es6: true
  },
  //extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    //"arrow-parens": ["error", "as-needed"],
    //"import/extensions": ["error", "always", { ignorePackages: true }],
    //"no-sparse-arrays": 0
    // "padding-line-between-statements": [
    //   "error",
    //   { blankLine: "always", prev: "*", next: "export" },
    //   {
    //     blankLine: "always",
    //     prev: ["const", "let", "var"],
    //     next: "block-like"
    //   },
    //   {
    //     blankLine: "always",
    //     next: ["const", "let", "var", "multiline-expression", "expression"],
    //     prev: "import"
    //   },
    //   { blankLine: "always", prev: "block-like", next: "*" },
    //   { blankLine: "always", prev: "import", next: "export" },
    //   {
    //     blankLine: "always",
    //     prev: "export",
    //     next: ["const", "let", "var", "multiline-expression", "expression"]
    //   },
    //   {
    //     blankLine: "always",
    //     next: ["multiline-const", "multiline-let", "multiline-var"],
    //     prev: "*"
    //   },
    //   {
    //     blankLine: "always",
    //     prev: "*",
    //     next: "return"
    //   },
    //   {
    //     blankLine: "always",
    //     prev: ["multiline-const", "multiline-let", "multiline-var"],
    //     next: "*"
    //   }
    // ]
  }
};
