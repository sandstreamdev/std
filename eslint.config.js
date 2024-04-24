export default [
  {
    files: ["**/*.js"],
    ignores: [".coverage", "docs/dist", "index.cjs.js", "index.umd.js"],
    rules: {
      "arrow-parens": ["error", "as-needed"],
      "no-sparse-arrays": 0,
      "no-undef": 0,
      "no-unused-vars": 0,
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "export" },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "block-like"
        },
        {
          blankLine: "always",
          next: ["const", "let", "var", "multiline-expression", "expression"],
          prev: "import"
        },
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "always", prev: "import", next: "export" },
        {
          blankLine: "always",
          prev: "export",
          next: ["const", "let", "var", "multiline-expression", "expression"]
        },
        {
          blankLine: "always",
          next: ["multiline-const", "multiline-let", "multiline-var"],
          prev: "*"
        },
        {
          blankLine: "always",
          prev: "*",
          next: "return"
        },
        {
          blankLine: "always",
          prev: ["multiline-const", "multiline-let", "multiline-var"],
          next: "*"
        }
      ]
    }
  }
];
