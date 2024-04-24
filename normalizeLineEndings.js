import { promises } from "node:fs";
import path from "node:path";
import os from "node:os";
import PQueue from "p-queue";

import ignored from "./ignore.js";

const CONCURRENCY = Math.max(1, os.cpus().length - 1);

const [, ignoredDirectories] = ignored;

const {
  readFile: readFileAsync,
  writeFile: writeFileAsync,
  readdir: readDirectoryAsync
} = promises;

const [, , cwd = process.cwd()] = process.argv;
const root = cwd;

const main = async cwd => {
  console.log(`Normalizing files in ${cwd}...`);

  const entries = await readDirectoryAsync(cwd, { withFileTypes: true });

  const files = entries.filter(x => x.isFile()).map(x => x.name);

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
      console.log(`Normalizing ${relativeFilePath}...`);

      const contents = await readFileAsync(filePath, "utf-8");

      const normalized = contents
        .split("\n")
        .map(x => x.trimEnd())
        .join("\n");

      await writeFileAsync(filePath, normalized, "utf-8");
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
