/* eslint-env node */
// eslint-disable console
import { promises, readdirSync } from "fs";
import path from "path";
import hljs from "highlight.js";

import ignored from "./ignore.js";
import packageConfig from "./package.json";

const pageTemplate = ({ content, toc = "", base = "/std/" }) =>
  `<!DOCTYPE html>
<html>
  <head>
    <base href="${base}">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="css/docs.css" />
    <link rel="stylesheet" href="css/default.css" />
  </head>
  <body>
    <div class="row">
      <div class="toc">
        <div class="list">${toc}</div>
      </div>
      <div class="content">${content}</div>
    </div>
    <script src="scripts/docs.js"></script>
    <script src="https://embed.runkit.com"></script>
  </body>
</html>`;

const nameFragment = (name, link, namepsace) =>
  name
    ? `<h3 class="name"><a href="${link}">${name} (from "${namepsace}")</a></h3>`
    : "";

const descriptionFragment = description => {
  if (description && !description.startsWith("TODO")) {
    return `<div class="description">
        <span>${description}</span>
      </div>`;
  }

  return "";
};

const signatureFragment = signature => {
  if (signature && !signature.startsWith("TODO")) {
    const singatureFormatted = hljs.highlight("typescript", signature).value;

    return `<div class="type-signature">
      <h3>Type signature</h3>
      <div class="content">
        <pre><code class="hljs"><span>${singatureFormatted}</span></code></pre>
      </div>
    </div>`;
  }

  return "";
};

const examplesFragment = (examples, scope) => {
  if (
    examples &&
    examples.length > 0 &&
    !examples[0].content.includes("TODO")
  ) {
    const examplesFormatted = examples
      .map(
        ex => `<span>${hljs.highlight(ex.language, ex.content).value}</span>`
      )
      .join("\n");

    const content = `<div class="examples">
      <h3>Examples</h3>
      <div class="content">
        <a class="btn-repl" onclick="tryInREPL(event, '${scope}')">Try in REPL</a>
        <pre><code class="hljs">${examplesFormatted}</code></pre>
      </div>
      <div class="repl"></div>
    </div>`;

    return content;
  }

  return "";
};

const questionsFragment = questions => {
  if (questions && questions.length > 0 && !questions[0].startsWith("TODO")) {
    const questionsFormatted = questions
      .map(question => `<li>${question}</li>`)
      .join("");

    return `<div class="questions">
        <h3>Questions</h3>
        <ul>${questionsFormatted}</ul>
      </div>`;
  }

  return "";
};

const template = (
  { name, description, signature, examples, questions },
  scope,
  link,
  namepsace
) => {
  const content = `<div class="std-item">
    <div>
      ${nameFragment(name, link, namepsace)}
      ${descriptionFragment(description)}
    </div>
    ${signatureFragment(signature)}
    ${examplesFragment(examples, scope)}
    ${questionsFragment(questions)}
  </div>`.trimLeft();

  return content;
};

const [ignoredFiles, ignoredDirectories] = ignored;

const {
  writeFile: writeFileAsync,
  readFile: readFileAsync,
  mkdir: mkdirAsync
} = promises;

const [, , local = false] = process.argv;

console.log(process.argv);

// Do not match type definition files *.d.ts but match *.ts:
// https://stackoverflow.com/a/43493203/1384679
const extension = /(^.?|\.[^d]|[^.]d|[^.][^d])\.json$/i;

const testFilePattern = /\.test\.[tj]s$/i;

function* filesPaths(directoryIn) {
  const entries = readdirSync(directoryIn, {
    withFileTypes: true
  });

  const directories = entries
    .filter(x => x.isDirectory())
    .map(x => x.name)
    .filter(x => !ignoredDirectories.includes(x));

  const filesList = entries
    .filter(x => x.isFile())
    .map(x => x.name)
    .filter(x => extension.test(x))
    .filter(x => !testFilePattern.test(x))
    .filter(x => !ignoredFiles.includes(x));

  for (const file of filesList) {
    yield path.join(directoryIn, file);
  }

  for (const directory of directories) {
    for (const filePath of filesPaths(path.join(directoryIn, directory))) {
      yield filePath;
    }
  }
}

const main = async cwd => {
  console.log(`Generating html documentation file...`);

  let base = local ? cwd + "/docs/" : "/std/";
  let content = "";

  let toc = `<h3><a href="${local ? "index.html" : ""}">${
    packageConfig.name
  } (${packageConfig.version})</a></h3>`;

  let moduleName = "";
  let items = [];

  for (const filePath of filesPaths(cwd)) {
    const fileContent = await readFileAsync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    const pathParts = path
      .dirname(filePath)
      .slice(cwd.length)
      .split(path.sep)
      .filter(x => x != "");

    const scope = pathParts
      .reverse()
      .reduce((memo, part) => `{ ${part}: ${memo} }`, `{ ${data.name} }`);

    const currentModule = path
      .dirname(filePath)
      .slice(cwd.length)
      .split(path.sep)
      .filter(x => x != "")
      .pop();

    if (currentModule !== moduleName) {
      moduleName = currentModule;

      const modulePath = [...pathParts, local ? "index.html" : undefined].join(
        "/"
      );

      toc += `<h3 class="module-name"><a href="${modulePath}">"${moduleName}" Methods</a></h3>`;
    }

    const link = [...pathParts, data.name].join("/");

    items.push({
      content: template(data, scope, link, currentModule),
      targetPath: path.join(".", "docs", ...pathParts, data.name),
      moduleName: currentModule,
      pathParts
    });

    toc += `<div class="toc-item"><a href="${link}/${
      local ? "index.html" : ""
    }">${data.name}</a></div>`;
  }

  let currentModule = "";
  let moduleContent = "";

  for (const item of items) {
    const { targetPath, moduleName, pathParts } = item;
    await mkdirAsync(targetPath, { recursive: true });

    if (currentModule !== moduleName) {
      if (moduleContent !== "") {
        await writeFileAsync(
          `${path.join(".", "docs", ...pathParts)}/index.html`,
          pageTemplate({ content: moduleContent, toc, base })
        );
      }

      currentModule = moduleName;

      const modulePath = [...pathParts, local ? "index.html" : undefined].join(
        "/"
      );

      const moduleHeader = `<h1 class="module-name"><a href="${modulePath}">"${moduleName}" Methods</a></h1>`;
      content += moduleHeader;
      moduleContent = moduleHeader;
    }

    await writeFileAsync(
      `${targetPath}/index.html`,
      pageTemplate({ ...item, toc, base })
    );

    content += item.content;
    moduleContent += item.content;
  }

  await writeFileAsync(
    "./docs/index.html",
    pageTemplate({ content, toc, base })
  );
};

main(process.cwd());
