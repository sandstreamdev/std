/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import path from "path";

import filesPaths, { docsPath, outPath, copyDir } from "./utils/io.js";
import pageTemplate from "./templates/page.js";
import tocContent from "./templates/toc.js";
import generateModuleDocs from "./templates/module.js";

const {
  writeFile: writeFileAsync,
  readFile: readFileAsync,
  mkdir: mkdirAsync,
  rmdir: rmdirAsync
} = promises;

let data = {};

const addData = (filePath, fileData) => {
  const pathParts = path
    .dirname(filePath)
    .slice(process.cwd().length)
    .split(path.sep)
    .filter(x => x != "");

  const moduleName = [...pathParts].pop();

  if (data[moduleName]) {
    data[moduleName].functions.push(fileData);
  } else {
    data[moduleName] = {
      pathParts,
      functions: [fileData]
    };
  }
};

const main = async cwd => {
  console.log("Clearing dist...");
  await rmdirAsync(outPath(), { recursive: true });
  await mkdirAsync(outPath(), { recursive: true });
  await copyDir(docsPath("css"), outPath("css"));
  await copyDir(docsPath("scripts"), outPath("scripts"));
  console.log("Generating html documentation files...");

  for (const filePath of filesPaths(cwd)) {
    const fileContent = await readFileAsync(filePath, "utf8");
    const fileData = JSON.parse(fileContent);

    addData(filePath, fileData);
  }

  const toc = tocContent(data);

  let mainPageContent = "";

  for (const moduleName of Object.keys(data)) {
    const moduleData = data[moduleName];
    mainPageContent += await generateModuleDocs({
      data: moduleData,
      toc,
      name: moduleName
    });
  }

  await writeFileAsync(
    outPath("index.html"),
    pageTemplate({ content: mainPageContent, toc })
  );
};

main(process.cwd());
