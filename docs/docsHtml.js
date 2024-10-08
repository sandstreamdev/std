import { promises } from "node:fs";
import path from "node:path";

import filesPaths, { docsPath, outPath, copyDir } from "./utils/io.js";
import pageTemplate from "./templates/page.js";
import tocContent from "./templates/toc.js";
import generateModuleDocs from "./templates/module.js";

const {
  mkdir: mkdirAsync,
  readFile: readFileAsync,
  rm: rmdirAsync,
  writeFile: writeFileAsync
} = promises;

const data = {};

const addData = (filePath, fileData) => {
  const pathParts = path
    .dirname(filePath)
    .slice(process.cwd().length)
    .split(path.sep)
    .filter(Boolean);

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
  const outputPath = outPath();

  console.log("Clearing dist...");
  await rmdirAsync(outputPath, { recursive: true, force: true });
  console.log("Cleared dist.");

  console.log("Creating dist...");
  await mkdirAsync(outputPath, { recursive: true });
  console.log("Created dist.");

  await copyDir(docsPath("css"), outPath("css"));
  await copyDir(docsPath("scripts"), outPath("scripts"));

  console.log("Generating html documentation files...");

  for (const path of filesPaths(cwd)) {
    const content = await readFileAsync(path, "utf8");
    const data = JSON.parse(content);

    addData(path, data);
  }

  const toc = await tocContent(data);

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
