/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import path from "path";
import hljs from "highlight.js";

import packageConfig from "./package.json";

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

const {
  writeFile: writeFileAsync,
  readFile: readFileAsync,
  mkdir: mkdirAsync
} = promises;

const [, , local = false] = process.argv;

let tocContent = "";
let processedModule = "";

const getModulePath = pathParts =>
  [...pathParts, local ? "index.html" : undefined].join("/");

const updateToc = (filePath, fileData) => {
  const { name, version } = packageConfig;

  if (tocContent == "") {
    tocContent = `<h3><a href="${
      local ? "index.html" : ""
    }">${name} (${version})</a></h3>`;
  }

  const pathParts = path
    .dirname(filePath)
    .slice(process.cwd().length)
    .split(path.sep)
    .filter(x => x != "");

  const moduleName = [...pathParts].pop();

  if (moduleName !== processedModule) {
    processedModule = moduleName;

    const modulePath = [...pathParts, local ? "index.html" : undefined].join(
      "/"
    );

    tocContent += `<h3 class="module-name"><a href="${modulePath}">"${moduleName}" Methods</a></h3>`;
  }

  const link = [...pathParts, fileData.name].join("/");

  tocContent += `<div class="toc-item"><a href="${link}/${
    local ? "index.html" : ""
  }">${fileData.name}</a></div>`;
};

let functionsData = [];

const addFunctionData = (filePath, fileData) => {
  const pathParts = path
    .dirname(filePath)
    .slice(process.cwd().length)
    .split(path.sep)
    .filter(x => x != "");

  const moduleName = [...pathParts].pop();

  const scope = [...pathParts]
    .reverse()
    .reduce((memo, part) => `{ ${part}: ${memo} }`, `{ ${fileData.name} }`);

  const link = [...pathParts, fileData.name].join("/");

  const content = template(
    fileData,
    scope,
    local ? `${link}/index.html` : link,
    moduleName
  );

  const targetPath = path.join(".", "docs", ...pathParts, fileData.name);

  functionsData.push({
    content,
    targetPath,
    moduleName,
    pathParts
  });
};

const main = async cwd => {
  console.log(`Generating html documentation file...`);

  let base = local ? cwd + "/docs/" : "/std/";
  let content = "";

  for (const filePath of filesPaths(cwd)) {
    const fileContent = await readFileAsync(filePath, "utf8");
    const fileData = JSON.parse(fileContent);

    updateToc(filePath, fileData);
    addFunctionData(filePath, fileData);
  }

  let modulesContent = {};

  for (const functionItem of functionsData) {
    const { targetPath, moduleName, pathParts } = functionItem;
    await mkdirAsync(targetPath, {
      recursive: true
    });

    await writeFileAsync(
      `${targetPath}/index.html`,
      pageTemplate({
        ...functionItem,
        toc: tocContent,
        base
      })
    );

    // save modules content to generate in next look modules pages
    if (modulesContent[moduleName]) {
      modulesContent[moduleName].content += functionItem.content;
    } else {
      const moduleHeader = `<h1 class="module-name"><a href="${getModulePath(
        pathParts
      )}">"${moduleName}" Methods</a></h1>`;

      modulesContent[moduleName] = {
        content: moduleHeader + functionItem.content,
        pathParts
      };

      content += moduleHeader;
    }

    // main page with all methods
    content += functionItem.content;
  }

  for (let i = 0; i < Object.keys(modulesContent).length; i++) {
    const moduleName = Object.keys(modulesContent)[i];
    const { content, pathParts } = modulesContent[moduleName];

    await writeFileAsync(
      `${path.join(".", "docs", ...pathParts)}/index.html`,
      pageTemplate({ content, toc: tocContent, base })
    );
  }

  await writeFileAsync(
    "./docs/index.html",
    pageTemplate({ content, toc: tocContent, base })
  );
};

main(process.cwd());
