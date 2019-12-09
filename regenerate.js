/* eslint-env node */
// eslint-disable console
import { promises } from "fs";
import path from "path";

import ignored from "./ignore.js";

const [ignoredFiles, ignoredDirectories] = ignored;

const { readdir: readDirectoryAsync, writeFile: writeFileAsync } = promises;

const [, , cwd = process.cwd()] = process.argv;

const mapping = {
function: "_function"
};

const identifier = name => mapping[name] || name;

// Do not match type definition files *.d.ts but match *.ts:
// https://stackoverflow.com/a/43493203/1384679
const extension = /(^.?|\.[^d]|[^.]d|[^.][^d])\.ts$/i;

const testFilePattern = /\.test\.[tj]s$/i;

const importFormat = ""; // js = ".js";
const indexName = "/index"; // js = "/index.js";
const outputFormat = ".ts"; // js = ".js";

const main = async cwd => {
console.log(`Indexing files in ${cwd}...`);

const entries = await readDirectoryAsync(cwd, { withFileTypes: true });

const files = entries
.filter(x => x.isFile())
.map(x => x.name)
.filter(x => extension.test(x))
.filter(x => !testFilePattern.test(x))
.filter(x => !ignoredFiles.includes(x));

const directories = entries
.filter(x => x.isDirectory())
.map(x => x.name)
.filter(x => !ignoredDirectories.includes(x));

for (const directory of directories) {
await main(path.join(cwd, directory));
}

const submodules = files.map(filePath => {
const { base: fileName } = path.parse(filePath);
const splitted = fileName.split(".");
const id = identifier(splitted.slice(0, splitted.length - 1).join("_"));
const extension = `.${splitted[splitted.length - 1]}`;

return [fileName.replace(extension, importFormat), id, extension];
});

const dependencies = [
...submodules,
...directories.map(x => [`${x}${indexName}`, identifier(x), ""])
];

const importDeclarations = dependencies
.map(([fileName, id]) =>
id !== "index" ? `import ${id} from './${fileName}'` : ""
)
.join("\r\n");

const exportDeclarationBody = dependencies
.map(([, id]) => (id !== "index" ? id : ""))
.join(", ");

const exportDeclaration = `export { ${exportDeclarationBody} }`;
const defaultExport = `export default { ${exportDeclarationBody} }`;

console.log(`Indexed files in ${cwd}:`);

const moduleContents = [
importDeclarations,
exportDeclaration,
defaultExport
].join("\r\n\r\n");

console.log(moduleContents);

await writeFileAsync(path.join(cwd, `index${outputFormat}`), moduleContents);
};

main(cwd);
