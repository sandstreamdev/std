/* eslint-env node */
// eslint-disable console
import { promises, readdirSync } from "fs";
import path from "path";
import hljs from "highlight.js";

import ignored from "./ignore.js";

const pageTemplate = content =>
  `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="css/docs.css" />
    <link rel="stylesheet" href="css/default.css" />
  </head>
  <body>
    ${content}
    <script src="scripts/docs.js"></script>
    <script src="https://embed.runkit.com"></script>
  </body>
</html>`;

const nameFragment = name => (name ? `<h3 class="name">${name}</h3>` : "");

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
        </div>
      </div>`;
  }

  return "";
};

const template = (
  { name, description, signature, examples, questions },
  scope
) => {
  const content = `<div class="std-item">
    <div>
      ${nameFragment(name)}
      ${descriptionFragment(description)}
    </div>
    ${signatureFragment(signature)}
    ${examplesFragment(examples, scope)}
    ${questionsFragment(questions)}
  </div>`.trimLeft();

  return content;
};

const [ignoredFiles, ignoredDirectories] = ignored;

const { writeFile: writeFileAsync, readFile: readFileAsync } = promises;

const [, , cwd = process.cwd()] = process.argv;

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

  let content = "";
  let moduleName = "";

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
      content += `<h1 class="module-name">"${moduleName}" Methods</h1>`;
    }

    content += template(data, scope);
  }

  await writeFileAsync("./docs/index.html", pageTemplate(content));
};

main(cwd);