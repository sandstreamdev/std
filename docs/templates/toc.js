import packageConfig from "../../package.json";
import { getPath } from "../utils/url.js";

const generateToc = data => {
  const { name, version } = packageConfig;

  let result = `<h3><a href="${getPath()}">${name} (${version})</a></h3>`;

  for (const moduleName of Object.keys(data)) {
    const { functions, pathParts } = data[moduleName];
    const modulePath = getPath(pathParts);
    result += `<h3 class="module-name"><a href="${modulePath}">"${moduleName}" functions</a></h3>`;

    for (const func of functions) {
      result += `<div class="toc-item"><a href="${getPath([
        ...pathParts,
        func.name
      ])}">${func.name}</a></div>`;
    }
  }

  return result;
};

export default generateToc;
