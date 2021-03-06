import { getBase } from "../utils/url.js";

const footer = `<footer>
  <span>Made with ❤️ by <a href="https://sandstream.pl/">Sandstream Development</a></span>
  <div>
    <span><a href="https://github.com/sandstreamdev/std">GitHub</a></span> •
    <span>License: <a href="https://github.com/sandstreamdev/std/blob/master/LICENSE">MIT</a></span>
  </div>
</footer>`;

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

      function tocFilter() {
        var input = document.getElementById('searchInput');
        var filter = input.value.toUpperCase();
        var tocItems = document.getElementsByClassName('toc-item');
        var modules = document.getElementsByClassName('module');

        for (var i = 0; i < tocItems.length; i++) {
          var a = tocItems[i];
          var txtValue = a.textContent || a.innerText;

          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tocItems[i].style.display = "";
          } else {
            tocItems[i].style.display = "none";
          }
        }

        for (var i = 0; i < modules.length; i++) {
          let visibleChildren = 0;
          const testedModule = modules[i];

          for (var j = 0; j < testedModule.childNodes.length; j++) {
            var child = testedModule.childNodes[j];
            if (child.style.display !== "none") {
              visibleChildren++;
            }
          }

          testedModule.style.display = visibleChildren === 1 ? "none" : "";
        }
      }
    </script>
  </head>
  <body>
    <aside>${toc}</aside>
    <main>${content}${footer}</main>
    <script async src="scripts/docs.js"></script>
    <script async src="https://embed.runkit.com"></script>
  </body>
</html>`;

export default pageTemplate;
