// eslint-disable-next-line no-unused-vars
function tryInREPL(event, scope) {
  var target = event.target;
  var isReplRun = target.matches(".btn-repl");

  if (!isReplRun) {
    return;
  }

  var codeElement = target.parentNode.children[1];

  var parent = target.parentNode;
  var container = target.parentNode.nextElementSibling;

  parent.parentNode.removeChild(parent);

  // eslint-disable-next-line no-undef
  RunKit.createNotebook({
    element: container,
    nodeVersion: "11",
    preamble: `const std = require ("@sandstreamdev/std/index.cjs.js");\nconst ${scope} = std;`,
    source: codeElement.textContent
  });
}

function toggleTableOfContents() {
  var className = "toc-active";

  if (!document.body.classList.contains(className)) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
}
