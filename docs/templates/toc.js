import packageConfig from "../../package.json";
import { getPath } from "../utils/url.js";

const generateToc = data => {
  const { name, version } = packageConfig;

  let result = `<h3><a href="${getPath()}">${name} (${version})</a></h3>`;
  result += `<div><input type="text" id="searchInput" onkeyup="tocFilter()" placeholder="Search..."></div>`;

  for (const moduleName of Object.keys(data)) {
    const { functions, pathParts } = data[moduleName];
    const modulePath = getPath(pathParts);
    result += `<div class="module"><h3 class="module-name" id="${pathParts.join(
      "/"
    )}"><a href="${modulePath}">"${moduleName}" functions</a></h3>`;

    for (const func of functions) {
      result += `<div class="toc-item" id="${[...pathParts, func.name].join(
        "/"
      )}"><a href="${getPath(pathParts, func.name)}">${func.name}</a></div>`;
    }

    result += "</div>";
  }

  return result;
};

export default generateToc;
