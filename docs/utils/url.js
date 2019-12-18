/* eslint-env node */
import flatten from "../../array/flatten.js";

const [, , local = false] = process.argv;

export const getBase = () => (local ? process.cwd() + "/docs/dist" : "/std/");

export const getPath = (...paths) => {
  const parts = flatten(paths).filter(x => x !== "");

  return local
    ? process.cwd() +
        `/docs/dist/${parts.length ? parts.join("/") + "/" : ""}index.html`
    : parts.join("/");
};
