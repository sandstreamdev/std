/* eslint-env node */
// eslint-disable console
import { promises } from "fs";

import { outPath } from "../utils/io.js";
import pageTemplate from "./page.js";
import generateFuncsDocs from "./function.js";

const { writeFile: writeFileAsync, mkdir: mkdirAsync } = promises;

const generateModuleDocs = async ({ data, toc, name }) => {
  const { functions, pathParts } = data;

  console.log(` - module: ${name} \n  - ${functions.length} functions\n`);

  await mkdirAsync(outPath(...pathParts), {
    recursive: true
  });

  let modulePageContent = "";

  for (const func of functions) {
    const content = await generateFuncsDocs({ func, toc, pathParts });
    modulePageContent += content;
  }

  return modulePageContent;
};

export default generateModuleDocs;
