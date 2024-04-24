function tryInREPL(event, scope) {
  const target = event.target;
  const isReplRun = target.matches(".btn-repl");

  if (!isReplRun) {
    return;
  }

  const parent = target.parentNode.children[0];
  const codeElement = parent.children[0];
  const container = target.parentNode.nextElementSibling;

  parent.parentNode.removeChild(parent);
  target.parentNode.removeChild(target);

  RunKit.createNotebook({
    element: container,
    nodeVersion: "11",
    preamble: `const std = require ("@sandstreamdev/std/index.cjs.js");\nconst ${scope} = std;`,
    source: codeElement.textContent
  });
}

function toggleTableOfContents() {
  const className = "toc-active";

  if (!document.body.classList.contains(className)) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
}
