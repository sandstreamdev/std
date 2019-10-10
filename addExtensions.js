/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import path from "path";
import os from "os";
import pQueue from "p-queue";

const CONCURRENCY = Math.max(1, os.cpus().length - 1);

const { default: PQueue } = pQueue;

import ignored from "./ignore.js";

const [ignoredFiles, ignoredDirectories] = ignored;

const {
  readdir: readDirectoryAsync,
  readFile: readFileAsync,
  writeFile: writeFileAsync
} = promises;

const [, , cwd = process.cwd()] = process.argv;
const root = cwd;

const extension = /\.js$/i;

const main = async cwd => {
  console.log(`Fixing files in ${cwd}...`);

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

  const processFile = async file => {
    const filePath = path.join(cwd, file);
    const relativeFilePath = path.relative(root, filePath);

    try {
      console.log(`Fixing ${relativeFilePath}...`);

      const contents = await readFileAsync(filePath, "utf-8");
      const withExtensions = contents.replace(/from "(.*?)"/gm, 'from "$1.js"');

      await writeFileAsync(filePath, withExtensions);

      console.log(`Fixed ${relativeFilePath}`);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

  const queue = new PQueue({ concurrency: CONCURRENCY });

  for (const file of files) {
    queue.add(() => processFile(file));
  }

  await queue.onIdle();
};

main(cwd);
