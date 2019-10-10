/* eslint-env node */
// eslint-disable console
import fs, { promises } from "fs";
import { promisify } from "util";
import { execFile } from "child_process";
import path from "path";
import pQueue from "p-queue";

const { default: PQueue } = pQueue;

const FS_DELAY = 0;
const TS_TIMEOUT = 0;

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const execFileAsync = promisify(execFile);

import ignored from "./ignore.js";

const [ignoredFiles, ignoredDirectories] = ignored;

const {
  readdir: readDirectoryAsync,
  readFile: readFileAsync,
  writeFile: writeFileAsync
} = promises;

const [, , cwd = process.cwd()] = process.argv;
const root = cwd;

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

  const processFile = async file => {
    const filePath = path.join(cwd, file);
    const relativeFilePath = path.relative(root, filePath);

    try {
      console.log(`Compiling ${relativeFilePath}...`);

      // const brokenFiles = [
      //   'array\\are.ts',
      //   'date\\displayMonth.ts',
      //   'date\\formatDate.ts',
      //   'date\\fromMinutes.ts',
      //   'date\\toLocalDateTime.ts',
      //   'math\\average.ts',
      //   'object\\any.ts',
      //   'object\\findEntry.ts'
      // ];

      // const broken = brokenFiles.includes(relativeFilePath);

      // if (!broken) {
      //   continue;
      // }

      const executable = "node";

      const args = [
        "./node_modules/typescript/bin/tsc",
        //"--diagnostics",
        "--skipLibCheck",
        "--module ES6",
        "--target ES2020",
        quotePath(path.posix.normalize(filePath))
      ];

      const command = [executable, ...args].join(" ");

      console.time(command);

      const task = execFileAsync(executable, args, {
        windowsVerbatimArguments: true
      });

      const result = await task;
      const { stdout, stderr } = result;
      console.timeEnd(command);

      const outputPath = relativeFilePath.replace(/\.ts$/i, ".js");

      fs.watchFile(outputPath, (curr, prev) => {
        console.log(`the current mtime is: ${curr.mtime}`);
        console.log(`the previous mtime was: ${prev.mtime}`);
        console.error(outputPath);
        process.exit(1);
      });

      const cp = task.child;

      //console.log({ cp });

      cp.unref();
      cp.kill();

      await delay(TS_TIMEOUT);

      fs.unwatchFile(outputPath);

      console.log(command);

      console.log(`Compiled ${relativeFilePath}`);

      const contents = await readFileAsync(outputPath, "utf-8");
      let withExtensions = contents.replace(/from "(.*?)"/gm, 'from "$1.js"');

      // if (relativeFilePath === 'array\\are.ts') {
      //   withExtensions = "const blalsdlasl = 1; const dlaslda = 2;";
      // }

      // if (/from "(.*?)"/gm.test(withExtensions)) {
      //   console.error("CONTENTS:")
      //   console.error(contents);
      //   console.error('')
      //   console.error("withExtensions:")
      //   console.error(withExtensions);

      //   throw new Error("Unprocessed import found!");
      // }

      await delay(FS_DELAY);

      // if (contents !== withExtensions) {
      // console.error("CONTENTS:")
      // console.error(contents);
      // console.error('')  z
      // console.error("withExtensions:")
      // console.error(withExtensions);
      //   throw new Error(withExtensions);
      // }

      await writeFileAsync(outputPath, withExtensions);

      // await writeFileAsync(
      //   relativeFilePath.replace(/\.ts$/i, ".xy"),
      //   withExtensions
      // );

      // fs.watchFile(outputPath, (curr, prev) => {
      //   console.log(`the current mtime is: ${curr.mtime}`);
      //   console.log(`the previous mtime was: ${prev.mtime}`);
      //   console.error(outputPath);
      //   process.exit(1);
      // });

      if (stdout || stderr) {
        console.log({ stdout, stderr });
      }
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  };

  //await Promise.all(files.map(processFile));

  const queue = new PQueue({ concurrency: 1 });

  for (const file of files) {
    // await processFile(file);

    queue.add(() => processFile(file));
  }

  await queue.onIdle();
};

main(cwd);
