/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import childProcess from "child_process";
import path from "path";

const exec = (command, options) =>
  new Promise((resolve, reject) =>
    childProcess.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve([stdout, stderr]);
      }
    })
  );

import ignored from "./ignore.js";

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

  for (const directory of directories) {
    await main(path.join(cwd, directory));
  }

  for (const file of files) {
    const filePath = path.join(cwd, file);

    try {
      console.log(`Compiling ${filePath}...`);

      const [stdout, stderr] = await exec(
        [
          "node",
          "./node_modules/typescript/bin/tsc",
          "--module ES6",
          "--target ES2020",
          quotePath(path.posix.normalize(filePath))
        ].join(" ")
      );

      console.log(`Compiled ${filePath}`);

      if (stdout || stderr) {
        console.log({ stdout, stderr });
      }
    } catch (error) {
      console.error(error);

      process.exit(1);
      return;
    }
  }
};

main(cwd);
