export default {
  input: "index.js",
  output: [
    {
      exports: "named",
      file: "index.cjs.js",
      format: "cjs"
    },
    {
      exports: "named",
      file: "index.umd.js",
      format: "umd",
      name: "@sandstreamdev/std"
    }
  ]
};
