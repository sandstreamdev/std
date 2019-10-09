/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import childProcess from "child_process";
import path from "path";

const FS_DELAY = 500;

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

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

  for (const file of files) {
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

      const [stdout, stderr] = await exec(
        [
          "node",
          "./node_modules/typescript/bin/tsc",
          "--module ES6",
          "--target ES2020",
          quotePath(path.posix.normalize(filePath))
        ].join(" ")
      );

      console.log(`Compiled ${relativeFilePath}`);

      const outputPath = relativeFilePath.replace(/\.ts$/i, ".js");

      const contents = await readFileAsync(outputPath, "utf-8");
      const withExtensions = contents.replace(/from "(.*?)"/g, 'from "$1.js"');

      if (/from "(.*?)"/g.test(withExtensions)) {
        console.error("CONTENTS:")
        console.error(contents);
        console.error('')
        console.error("withExtensions:")
        console.error(withExtensions);

        throw new Error("Unprocessed import found!");
      }

      await delay(FS_DELAY);

      // if (contents !== withExtensions) {
      // console.error("CONTENTS:")
      // console.error(contents);
      // console.error('')
      // console.error("withExtensions:")
      // console.error(withExtensions);
      //   throw new Error(withExtensions);
      // }

      await writeFileAsync(outputPath, withExtensions);

      await writeFileAsync(outputPath.replace(/\.ts$/i, ".js"), withExtensions);

      if (stdout || stderr) {
        console.log({ stdout, stderr });
      }
    } catch (error) {
      console.error(error);

      process.exit(1);
    }
  }
};

main(cwd);
