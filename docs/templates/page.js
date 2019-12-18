import { getBase } from "../utils/url.js";

const pageTemplate = ({ content, toc, onContentLoaded = "" }) =>
  `<!DOCTYPE html>
<html>
  <head>
    <base href="${getBase()}">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="css/docs.css" />
    <link rel="stylesheet" href="css/default.css" />
    <script>
      document.addEventListener('DOMContentLoaded', (event) => {
        ${onContentLoaded}
      });
    </script>
  </head>
  <body>
    <div class="row">
      <div class="toc">
        <div class="list">${toc}</div>
      </div>
      <div class="content">${content}</div>
    </div>
    <script src="scripts/docs.js"></script>
    <script src="https://embed.runkit.com"></script>
  </body>
</html>`;

export default pageTemplate;
