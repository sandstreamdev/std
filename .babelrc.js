module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "core-js@3",
        targets: { node: "current" },
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-typescript"
  ]
};
