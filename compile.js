/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import { promisify } from "util";
import { execFile } from "child_process";
import path from "path";
import os from "os";
import pQueue from "p-queue";

const CONCURRENCY = Math.max(1, os.cpus().length - 1);

const { default: PQueue } = pQueue;

const execFileAsync = promisify(execFile);

import ignored from "./ignore.js";

const [ignoredFiles, ignoredDirectories] = ignored;

const { readdir: readDirectoryAsync } = promises;

const executable = "node";

const [, , cwd = process.cwd()] = process.argv;
const root = cwd;

// Do not match type definition files *.d.ts but match *.ts:
// https://stackoverflow.com/a/43493203/1384679
const extension = /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/i;

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

  const processFile = async file => {
    const filePath = path.join(cwd, file);
    const relativeFilePath = path.relative(root, filePath);

    try {
      console.log(`Compiling ${relativeFilePath}...`);

      const args = [
        "./node_modules/typescript/bin/tsc",
        //"--diagnostics",
        "--skipLibCheck",
        "--module ES6",
        "--target ES2020",
        "-d",
        quotePath(path.posix.normalize(filePath))
      ];

      const command = [executable, ...args].join(" ");

      console.time(command);

      const { stdout, stderr } = await execFileAsync(executable, args, {
        windowsVerbatimArguments: true
      });

      console.timeEnd(command);

      console.log(`Compiled ${relativeFilePath}`);

      if (stdout || stderr) {
        console.log({ stdout, stderr });
      }
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
