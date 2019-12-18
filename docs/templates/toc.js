import packageConfig from "../../package.json";
import { getPath } from "../utils/url.js";

export default data => {
  const { name, version } = packageConfig;

  let result = `<h3><a href="${getPath()}">${name} (${version})</a></h3>`;
  result += `<div><input type="text" id="searchInput" onkeyup="tocFilter()" placeholder="Search..."></div>`;

  for (const moduleName of Object.keys(data)) {
    const { functions, pathParts } = data[moduleName];
    const modulePath = getPath(pathParts);

    result += `<div class="module">`;
    result += `<h3 class="module-name" id="${pathParts.join(
      "/"
    )}"><a href="${modulePath}">"${moduleName}" functions</a></h3>`;

    for (const { name } of functions) {
      result += `<div class="toc-item" id="${[...pathParts, name].join(
        "/"
      )}"><a href="${getPath(pathParts, name)}">${name}</a></div>`;
    }

    result += "</div>";
  }

  return result;
};
