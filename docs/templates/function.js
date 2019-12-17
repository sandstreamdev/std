import hljs from "highlight.js";
import { promises } from "fs";

import { outPath } from "../utils/io.js";
import { getPath } from "../utils/url.js";
import pageTemplate from "./page.js";
import last from "../../array/last.js";

const { writeFile: writeFileAsync, mkdir: mkdirAsync } = promises;

const breadcrumb = (name, pathParts) => {
  const parts = ["", ...pathParts, name];

  let resultParts = [];

  for (let i = 1; i < parts.length; i++) {
    const part = parts.slice(0, i);
    resultParts.push(
      `<a href="${getPath(part)}">${last(part) === "" ? "std" : last(part)}</a>`
    );
  }

  return `<div class="breadcrumbs">${resultParts.join(" ⇒ ")}</div>`;
};

const nameFragment = (name, pathParts) => {
  return name
    ? `<h3 class="name"><a href="${getPath(pathParts, name)}">${name}</a></h3>`
    : "";
};

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

const examplesFragment = (examples, pathParts, funcName) => {
  if (
    examples &&
    examples.length > 0 &&
    !examples[0].content.includes("TODO")
  ) {
    const scope = [...pathParts]
      .reverse()
      .reduce((memo, part) => `{ ${part}: ${memo} }`, `{ ${funcName} }`);

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

const funcTemplate = (
  { name, description, signature, examples, questions },
  pathParts
) => {
  const content = `<div class="std-item">
    <div>
      ${breadcrumb(name, pathParts)}
    </div>
    <div>
      ${nameFragment(name, pathParts)}
      ${descriptionFragment(description)}
    </div>
    ${signatureFragment(signature)}
    ${examplesFragment(examples, pathParts, name)}
    ${questionsFragment(questions)}
  </div>`.trimLeft();

  return content;
};

const generateFuncDocs = async ({ func, toc, pathParts }) => {
  await mkdirAsync(outPath(...pathParts, func.name), {
    recursive: true
  });

  const functionPageContent = funcTemplate(func, pathParts);

  await writeFileAsync(
    outPath(...pathParts, func.name, "index.html"),
    pageTemplate({ content: functionPageContent, toc })
  );

  return functionPageContent;
};

export default generateFuncDocs;
