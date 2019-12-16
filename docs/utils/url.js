/* eslint-env node */
const [, , local = false] = process.argv;

export const getBase = () => (local ? process.cwd() + "/docs/dist" : "/std/");

export const getPath = path =>
  local
    ? process.cwd() + `/docs/dist/${path ? path.join("/") + "/" : ""}index.html`
    : path;
