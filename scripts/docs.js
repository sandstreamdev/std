/* eslint-disable no-undef */
// (function() {
//   document.body.addEventListener("click", tryInREPL);

//   function tryInREPL(event) {
//     var target = event.target;
//     var isReplRun = target.matches(".btn-repl");

//     if (!isReplRun) {
//       return;
//     }

//     var codeElement = target.parentNode.children[1];

//     var parent = target.parentNode;
//     var container = target.parentNode.nextElementSibling;

//     parent.parentNode.removeChild(parent);

//     RunKit.createNotebook({
//       element: container,
//       nodeVersion: "*",
//       preamble: 'const std = require ("@sandstreamdev/std/index.cjs.js")',
//       // preamble:
//       //   'var { Maybe, Either } = require("ramda-fantasy");\nvar R = require("ramda' +
//       //   ramdaVersion +
//       //   '");',
//       source: codeElement.textContent
//     });
//   }
// }.call(this));

// eslint-disable-next-line no-unused-vars
function tryInREPL(event, scope) {
  var target = event.target;
  var isReplRun = target.matches(".btn-repl");

  if (!isReplRun) {
    return;
  }

  console.info(scope);

  var codeElement = target.parentNode.children[1];

  var parent = target.parentNode;
  var container = target.parentNode.nextElementSibling;

  parent.parentNode.removeChild(parent);

  RunKit.createNotebook({
    element: container,
    nodeVersion: "*",
    preamble: `const std = require ("@sandstreamdev/std/index.cjs.js");\nconst ${scope} = std;`,
    source: codeElement.textContent
  });
}
