/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import path from "path";
import execa from "execa";

import ignored from "./ignored.js";

const [ignoredFiles, ignoredDirectories] = ignored;

const { readdir: readDirectoryAsync } = promises;

const [, , cwd = process.cwd()] = process.argv;

const extension = /\.ts$/i;

const quotePath = path => `"${path}"`;

const main = async cwd => {
  console.log(`Compiling files in ${cwd}...`);

  const entries = await readDirectoryAsync(cwd, { withFileTypes: true });

  const files = entries
    .filter(x => x.isFile())
    .map(x => x.name)
    .filter(x => extension.test(x))
    .filter(x => !ignoredFiles.includes(x));

  const directories = entries
    .filter(x => x.isDirectory())
    .map(x => x.name)
    .filter(x => !ignoredDirectories.includes(x));

  console.log({ directories, files });

  for (const directory of directories) {
    await main(path.join(cwd, directory));
  }

  for (const file of files) {
    const filePath = path.join(cwd, file);

    const { stdout } = await execa("node", [
      "./node_modules/typescript/bin/tsc",
      "-m ES6",
      ,
      "-t ES2020",
      quotePath(filePath)
    ]);
    console.log(stdout);
  }
};

main(cwd);
