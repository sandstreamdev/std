/* eslint-env node */
const [, , local = false] = process.argv;

export const getBase = () => (local ? process.cwd() + "/docs/dist" : "/std/");

export const getPath = (...paths) =>
  local
    ? process.cwd() +
      `/docs/dist/${paths ? [...paths].join("/") + "/" : ""}index.html`
    : paths.join("/");
