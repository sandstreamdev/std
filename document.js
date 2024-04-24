import { promises, existsSync } from "node:fs";
import path from "node:path";

import ignored from "./ignore.js";
import mappings from "./mappings.js";

const template = ({ name, description, signature, examples, questions }) => {
  let content = `# ${name}
`;

  if (description && !description.startsWith("TODO")) {
    content += `
${description}
`;
  }

  if (signature && !signature.startsWith("TODO")) {
    content += `
## Type signature

<!-- prettier-ignore-start -->
\`\`\`typescript
${signature}
\`\`\`
<!-- prettier-ignore-end -->
`;
  }

  if (
    examples &&
    examples.length > 0 &&
    !examples[0].content.includes("TODO")
  ) {
    content += `
## Examples
<!-- prettier-ignore-start -->`;
    content += examples
      .map(
        item => `
\`\`\`${item.language}
${item.content}
\`\`\``
      )
      .join("\n");
    content += "\n<!-- prettier-ignore-end -->\n";
  }

  if (questions && questions.length > 0 && !questions[0].startsWith("TODO")) {
    content += `
## Questions

`;

    content += questions.map(item => `- ${item}`).join("\n");
    content += "\n";
  }

  return content;
};

const jsonTemplate = name => ({
  name,
  description: "TODO: Fill short description here.",
  signature: "TODO: Fill type signature here.",
  examples: [
    {
      language: "javascript",
      content: `${name}();\n// ⇒ TODO`
    }
  ],
  questions: ["TODO: List questions that may this function answers."]
});

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

const getSignature = async signaturePath => {
  const fileContent = await readFileAsync(signaturePath, "utf8");

  const exportDefaultTag = "export default ";

  const exportedModuleName = fileContent
    .slice(fileContent.indexOf(exportDefaultTag) + exportDefaultTag.length)
    .trim()
    .slice(0, -1);

  const startTag = `${exportedModuleName}:`;
  const startIndex = fileContent.indexOf(startTag) + startTag.length;

  const endTag = "\n\n";
  const endIndex = fileContent.indexOf(endTag, startIndex);

  return fileContent
    .slice(startIndex, endIndex)
    .trim()
    .slice(0, -1)
    .replace(";\nexport default _default", "")
    .trim();
};

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

  for (const [fileName, id] of submodules) {
    const filePath = path.join(cwd, `${fileName}.md`);
    const jsonPath = path.join(cwd, `${fileName}.json`);

    if (!existsSync(jsonPath)) {
      const content = jsonTemplate(id);

      await writeFileAsync(jsonPath, JSON.stringify(content, null, 2), "utf8");
    }

    const fileContent = await readFileAsync(jsonPath, "utf8");
    const data = JSON.parse(fileContent);

    const signaturePath = path.join(cwd, `${fileName}.d.ts`);
    const signature = await getSignature(signaturePath);

    if (signature !== data.signature) {
      data.signature = signature;
      await writeFileAsync(jsonPath, JSON.stringify(data, null, 2), "utf8");
    }

    const content = template(data);

    await writeFileAsync(filePath, content);
  }
};

main(cwd);
