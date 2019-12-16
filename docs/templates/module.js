import { promises } from "fs";
import path from "path";

import { docsPath, outPath } from "../utils/io.js";

const { writeFile: writeFileAsync, mkdir: mkdirAsync } = promises;

const generateDocs = async data => {
  for (const moduleName of Object.keys(data)) {
    const { functions, pathParts } = data[moduleName];
    const modulePath = outPath(...pathParts);

    console.log(modulePath);

    // await mkdirAsync(targetPath, {
    //   recursive: true
    // });

    // await writeFileAsync(
    //   `${targetPath}/index.html`,
    //   pageTemplate({
    //     ...functionItem,
    //     toc: tocContent,
    //     base
    //   })
    // );
  }

  return "";
};

export default generateDocs;
