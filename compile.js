/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import { promisify } from "util";
import { exec } from "child_process";
import path from "path";
import os from "os";
import PQueue from "p-queue";

import ignored from "./ignore.js";

const CONCURRENCY = Math.max(1, os.cpus().length - 1);

const execAsync = promisify(exec);

const [sourceIgnoredFiles, ignoredDirectories] = ignored;

const ignoredFiles = sourceIgnoredFiles.filter(x => x !== "index.ts");

const { readdir: readDirectoryAsync } = promises;

const executable = "node";

const [, , cwd = process.cwd()] = process.argv;
const root = cwd;

// Do not match type definition files *.d.ts but match *.ts:
// https://stackoverflow.com/a/43493203/1384679
const extension = /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/i;

const testFilePattern = /\.test\.[tj]s$/i;

const quotePath = path => `"${path}"`;

const main = async cwd => {
  console.log(`Compiling files in ${cwd}...`);

  const entries = await readDirectoryAsync(cwd, { withFileTypes: true });

  const files = entries
    .filter(x => x.isFile())
    .map(x => x.name)
    .filter(x => extension.test(x))
    .filter(x => !testFilePattern.test(x))
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
        "--noImplicitAny",
        "--strict",
        "-d",
        quotePath(path.posix.normalize(filePath))
      ];

      const command = [executable, ...args].join(" ");

      const windows = process.platform === "win32";

      const execOptions = {
        windowsVerbatimArguments: windows
      };

      console.time(command);

      const { stdout, stderr } = await execAsync(command, execOptions);

      console.timeEnd(command);

      console.log(`Compiled with strict mode ${relativeFilePath}`);

      if (stdout || stderr) {
        console.log({ stdout, stderr });
      }

      const nonStrictCommand = [
        executable,
        ...args.filter(x => x !== "--strict")
      ].join(" ");

      console.time(nonStrictCommand);

      const { stdout: secondStdout, stderr: secondStderr } = await execAsync(
        nonStrictCommand,
        execOptions
      );

      console.timeEnd(nonStrictCommand);

      console.log(`Compiled without strict mode ${relativeFilePath}`);

      if (secondStdout || secondStderr) {
        console.log({ secondStdout, secondStderr });
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
