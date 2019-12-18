import { promises, readdirSync } from "fs";
import path from "path";

import ignored from "../../ignore.js";

const {
  copyFile: copyFileAsync,
  mkdir: mkdirAsync,
  readdir: readdirAsync
} = promises;

const [ignoredFiles, ignoredDirectories] = ignored;

function* filesPaths(directoryIn) {
  const entries = readdirSync(directoryIn, {
    withFileTypes: true
  });

  const directories = entries
    .filter(x => x.isDirectory())
    .map(x => x.name)
    .filter(x => !ignoredDirectories.includes(x));

  const filesList = entries
    .filter(x => x.isFile())
    .map(x => x.name)
    .filter(x => x.endsWith(".json"))
    .filter(x => !ignoredFiles.includes(x));

  for (const file of filesList) {
    yield path.join(directoryIn, file);
  }

  for (const directory of directories) {
    for (const filePath of filesPaths(path.join(directoryIn, directory))) {
      yield filePath;
    }
  }
}

export const docsPath = (...paths) => path.join("docs", ...paths);

export const outPath = (...paths) => path.join("docs/dist", ...paths);

export const copyDir = async (src, dest) => {
  const files = await readdirAsync(src);
  await mkdirAsync(dest, { recursive: true });

  for (const file of files) {
    await copyFileAsync(path.join(src, file), path.join(dest, file));
  }
};

export default filesPaths;
