// @ts-check

import tsEslint from "typescript-eslint";

export default tsEslint.config({
  files: ["*.ts"],
  ignores: ["*.d.ts", "index.cjs.js", "index.umd.js", ".coverage", "docs/dist"],
  rules: {
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "no-undef": 0,
    "arrow-parens": ["error", "as-needed"],
    "no-sparse-arrays": 0,
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
});
