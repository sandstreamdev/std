export default (string: string) =>
  string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
