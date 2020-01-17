/* eslint-env browser */

// eslint-disable-next-line no-unused-vars
function tryInREPL(event, scope) {
  var target = event.target;
  var isReplRun = target.matches(".btn-repl");

  if (!isReplRun) {
    return;
  }

  var parent = target.parentNode.children[0];
  var codeElement = parent.children[0];
  var container = target.parentNode.nextElementSibling;

  parent.parentNode.removeChild(parent);
  target.parentNode.removeChild(target);

  // eslint-disable-next-line no-undef
  RunKit.createNotebook({
    element: container,
    nodeVersion: "11",
    preamble: `const std = require ("@sandstreamdev/std/index.cjs.js");\nconst ${scope} = std;`,
    source: codeElement.textContent
  });
}

// eslint-disable-next-line no-unused-vars
function toggleTableOfContents() {
  var className = "toc-active";

  if (!document.body.classList.contains(className)) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
}
