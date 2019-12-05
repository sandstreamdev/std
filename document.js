/* eslint-env node */
// eslint-disable console
import { promises, existsSync } from "fs";
import path from "path";

import ignored from "./ignore.js";

const template = name =>
  `
# ${name}

TODO: Fill short function description here.

## Type signature

TODO: Fill type signature down below.

\`\`\`
any ⇒ any
\`\`\`

## Examples

TODO: List at least one example down below.

\`\`\`javascript
${name}(); // ⇒ TODO
\`\`\`

## Questions

TODO: List questions that may this function answers.
`.trimLeft();

const [ignoredFiles, ignoredDirectories] = ignored;

const { readdir: readDirectoryAsync, writeFile: writeFileAsync } = promises;

const [, , cwd = process.cwd()] = process.argv;

const mapping = {
  function: "_function"
};

const identifier = name => mapping[name] || name;

// Do not match type definition files *.d.ts but match *.ts:
// https://stackoverflow.com/a/43493203/1384679
const extension = /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/i;

const testFilePattern = /\.test\.[tj]s$/i;

const importFormat = ""; // js = ".js";

const main = async cwd => {
  console.log(`Generating documentation files in ${cwd}...`);

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

  const submodules = files.map(filePath => {
    const { base: fileName } = path.parse(filePath);
    const splitted = fileName.split(".");
    const id = identifier(splitted.slice(0, splitted.length - 1).join("_"));
    const extension = `.${splitted[splitted.length - 1]}`;

    return [fileName.replace(extension, importFormat), id, extension];
  });

  for (const [fileName, id] in submodules) {
    const filePath = path.join(cwd, fileName + ".md");

    if (!existsSync(filePath)) {
      const content = template(id);

      await writeFileAsync(filePath, content);
    }
  }
};

main(cwd);
