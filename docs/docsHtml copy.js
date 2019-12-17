/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import path from "path";

import packageConfig from "./package.json";

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
