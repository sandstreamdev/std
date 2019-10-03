export default {
  input: "index.js",
  output: [
    {
      exports: "named",
      file: "index.cjs.js",
      format: "cjs"
    },
    {
      file: "index.umd.js",
      format: "umd",
      name: "@sandstreamdev/std"
    }
  ]
};
