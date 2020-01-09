export default (base64: string) =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");
