import packageConfig from "../../package.json";
import { getPath } from "../utils/url.js";
import tocButton from "./tocButton.js";

export default data => {
  const { name, version } = packageConfig;

  let result = `<h1>${tocButton}<a href="${getPath()}">${name} (${version})</a></h1>`;
  result += `<input type="text" id="searchInput" onkeyup="tocFilter()" placeholder="Search...">`;

  for (const moduleName of Object.keys(data)) {
    const { functions, pathParts } = data[moduleName];
    const modulePath = getPath(pathParts);

    result += `<div class="module">`;
    result += `<h3 class="module-name" id="${pathParts.join(
      "/"
    )}"><a href="${modulePath}">${moduleName}</a></h3>`;

    for (const { name } of functions) {
      result += `<a class="toc-item" id="${[...pathParts, name].join(
        "/"
      )}" href="${getPath(pathParts, name)}">${name}</a>`;
    }

    result += "</div>";
  }

  return result;
};
