/* eslint-env node */
// eslint-disable console
import { promises } from "fs";

import { outPath } from "../utils/io.js";
import { getPath } from "../utils/url.js";
import { scrollTo } from "../utils/scripts.js";
import pageTemplate from "./page.js";
import generateFuncsDocs from "./function.js";

const { writeFile: writeFileAsync, mkdir: mkdirAsync } = promises;

export default async ({ data, toc, name }) => {
  const { functions, pathParts } = data;

  console.log(` - module: ${name} \n  - ${functions.length} functions\n`);

  await mkdirAsync(outPath(...pathParts), {
    recursive: true
  });

  let modulePageContent = `<h2 class="module-name"><a href="${getPath(
    pathParts
  )}">${name}</a></h2>`;

  for (const func of functions) {
    const content = await generateFuncsDocs({ func, toc, pathParts });

    modulePageContent += content;
  }

  await writeFileAsync(
    outPath(...pathParts, "index.html"),
    pageTemplate({
      content: modulePageContent,
      toc,
      onContentLoaded: scrollTo(pathParts.join("/"))
    })
  );

  return modulePageContent;
};
