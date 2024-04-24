import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { promises } from "node:fs";
import prettier from "prettier";

import { outPath } from "../utils/io.js";
import { getPath } from "../utils/url.js";
import { scrollTo } from "../utils/scripts.js";
import pageTemplate from "./page.js";
import last from "../../array/last.js";
import reverse from "../../array/reverse.js";
import tocButton from "./tocButton.js";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

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

  return `${resultParts.join("<span>/</span>")}`;
};

const nameFragment = (name, pathParts) =>
  name
    ? `<h3 class="name breadcrumbs">${tocButton}${breadcrumb(
        name,
        pathParts
      )}<span>/</span><a href="${getPath(pathParts, name)}">${name}</a></h3>`
    : "";

const blobUrl = "https://github.com/sandstreamdev/std/blob/master";

const sourcePath = (name, partPaths, extension) =>
  `${[blobUrl, partPaths, name].join("/")}${extension}`;

const metaFragment = (name, pathParts) =>
  name
    ? `<p class="meta">
      <a href="${sourcePath(
        name,
        pathParts,
        ".ts"
      )}">TypeScript source</a> • <a href="${sourcePath(
        name,
        pathParts,
        ".js"
      )}">JavaScript source</a>
    </p>`
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

  const signatureFormatted = hljs.highlight(signature, {
    language: "typescript"
  }).value;

  return `<div class="type-signature">
    <h3>Type signature</h3>
    <div class="content">
      <pre><code class="hljs"><span>${signatureFormatted}</span></code></pre>
    </div>
  </div>`;
};

const examplesFragment = async (examples, pathParts, funcName) => {
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

  const examplesFormatted = await Promise.all(
    examples.map(async ({ content, language }) => {
      const formattedCode = await prettier.format(content, {
        parser: "babel",
        printWidth: 36,
        semi: true
      });

      return `<span>${hljs.highlight(formattedCode, { language }).value}</span>`;
    })
  );

  const fragment = exampleFormatted => `
    <div class="content">
      <pre><code class="hljs">${exampleFormatted}</code></pre>
      <a class="btn-repl" onclick="tryInREPL(event, '${scope}')">Try in REPL</a>
    </div>
    <div class="repl"></div>
  `;

  const fragments = examplesFormatted.map(fragment).join("\n");

  const content = `<div class="examples">
    <h3>Examples</h3>
    ${fragments}
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

const funcTemplate = async (
  { name, description, signature, examples, questions },
  pathParts
) => {
  const content = `<article>
    ${nameFragment(name, pathParts)}
    ${descriptionFragment(description)}
    ${signatureFragment(signature)}
    ${await examplesFragment(examples, pathParts, name)}
    ${questionsFragment(questions)}
    ${metaFragment(name, pathParts)}
  </article>`.trimLeft();

  return content;
};

export default async ({ func, toc, pathParts }) => {
  await mkdirAsync(outPath(...pathParts, func.name), {
    recursive: true
  });

  const functionPageContent = await funcTemplate(func, pathParts);

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
