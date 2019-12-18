import hljs from "highlight.js";
import { promises } from "fs";

import { outPath } from "../utils/io.js";
import { getPath } from "../utils/url.js";
import { scrollTo } from "../utils/scripts.js";
import pageTemplate from "./page.js";
import last from "../../array/last.js";
import reverse from "../../array/reverse.js";

const { writeFile: writeFileAsync, mkdir: mkdirAsync } = promises;

const breadcrumbPart = (anchor, text) => `<a href="${anchor}">${text}</a>`;

const breadcrumb = (name, pathParts) => {
  const parts = ["", ...pathParts, name];

  let resultParts = [];

  for (let i = 1; i < parts.length; i++) {
    const part = parts.slice(0, i);

    resultParts.push(
      breadcrumbPart(getPath(part), last(part) === "" ? "std" : last(part))
    );
  }

  return `<div class="breadcrumbs">${resultParts.join("<span>/</span>")}</div>`;
};

const nameFragment = (name, pathParts) =>
  name
    ? `<h3 class="name"><a href="${getPath(pathParts, name)}">${name}</a></h3>`
    : "";

const descriptionFragment = description => {
  if (!description || description.startsWith("TODO")) {
    return "";
  }

  return `<div class="description"><span>${description}</span></div>`;
};

const signatureFragment = signature => {
  if (!signature || signature.startsWith("TODO")) {
    return "";
  }

  const singatureFormatted = hljs.highlight("typescript", signature).value;

  return `<div class="type-signature">
    <h3>Type signature</h3>
    <div class="content">
      <pre><code class="hljs"><span>${singatureFormatted}</span></code></pre>
    </div>
  </div>`;
};

const examplesFragment = (examples, pathParts, funcName) => {
  if (
    !examples ||
    examples.length === 0 ||
    examples[0].content.includes("TODO")
  ) {
    return "";
  }

  const scope = reverse(pathParts).reduce(
    (memo, part) => `{ ${part}: ${memo} }`,
    `{ ${funcName} }`
  );

  const examplesFormatted = examples
    .map(ex => `<span>${hljs.highlight(ex.language, ex.content).value}</span>`)
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
};

const questionsFragment = questions => {
  if (!questions || questions.length === 0 || questions[0].startsWith("TODO")) {
    return "";
  }

  const questionsFormatted = questions
    .map(question => `<li>${question}</li>`)
    .join("");

  return `<div class="questions">
      <h3>Questions</h3>
      <ul>${questionsFormatted}</ul>
    </div>`;
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

export default async ({ func, toc, pathParts }) => {
  await mkdirAsync(outPath(...pathParts, func.name), {
    recursive: true
  });

  const functionPageContent = funcTemplate(func, pathParts);

  await writeFileAsync(
    outPath(...pathParts, func.name, "index.html"),
    pageTemplate({
      content: functionPageContent,
      toc,
      onContentLoaded: scrollTo([...pathParts, func.name].join("/"))
    })
  );

  return functionPageContent;
};