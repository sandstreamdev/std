/* eslint-env node */
// eslint-disable console
import { promises, existsSync } from "fs";
import path from "path";

import ignored from "./ignore.js";
import mappings from "./mappings.js";

const [ignoredFiles, ignoredDirectories] = ignored;

const {
  readdir: readDirectoryAsync,
  writeFile: writeFileAsync,
  readFile: readFileAsync
} = promises;

const [, , cwd = process.cwd()] = process.argv;

const identifier = name => mappings[name] || name;

// Do not match type definition files *.d.ts but match *.ts:
// https://stackoverflow.com/a/43493203/1384679
const extension = /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/i;

const testFilePattern = /\.test\.[tj]s$/i;

const importFormat = ""; // js = ".js";

const main = async (cwd, level = 0) => {
  console.log(`Generating README files in ${cwd}...`);

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
    await main(path.join(cwd, directory), level + 1);
  }

  const submodules = files.map(filePath => {
    const { base: fileName } = path.parse(filePath);
    const splitted = fileName.split(".");
    const id = identifier(splitted.slice(0, splitted.length - 1).join("_"));
    const extension = `.${splitted[splitted.length - 1]}`;

    return [fileName.replace(extension, importFormat), id, extension];
  });

  const dependencies = [
    ...submodules,
    ...directories.map(x => [`${x}/README`, "README", ".md", level + 1, x])
  ];

  const readmes = [];

  for (const [fileName, , , level, directory] of dependencies) {
    const filePath = path.join(cwd, fileName + ".md");

    const readme = await readFileAsync(filePath, "utf-8");

    const padding = "".padEnd(Math.min(level, 1), "#");
    const withAdjustedLevels = readme.replace(/(#+)/gi, `${padding}$1`);

    if (level > 0) {
      const headerPadding = "".padEnd(1, "#");
      const header = `${headerPadding} ${directory}`;

      readmes.push(header);
    }

    readmes.push(withAdjustedLevels);
  }

  const composedReadme = readmes.join("\n\n");

  const readmePath = path.join(cwd, "README.md");

  if (existsSync(readmePath)) {
    const contents = await readFileAsync(readmePath, "utf-8");

    const prefix = "<!-- DOCS:START - Do not remove or modify this section -->";
    const postfix = "<!-- DOCS:END -->";

    const prefixIndex = contents.indexOf(prefix);
    const postfixIndex = contents.indexOf(postfix);

    if (prefixIndex !== -1 && postfixIndex !== -1) {
      const before = contents.substr(0, prefixIndex);
      const after = contents.substr(postfixIndex + postfix.length);

      const padding = "".padEnd(2, "#");

      const withAdjustedLevels = composedReadme.replace(
        /(#+)/gi,
        `${padding}$1`
      );

      const replaced = `${before}${prefix}\n${withAdjustedLevels.trim()}\n${postfix}${after}`;

      await writeFileAsync(readmePath, replaced, "utf-8");

      return;
    }
  }

  await writeFileAsync(readmePath, composedReadme, "utf-8");
};

main(cwd, 0);
