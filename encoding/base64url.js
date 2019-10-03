export const encode = _ =>
  btoa(_)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

export const toBase64Url = base64 =>
  base64.replace(/\+/g, "-").replace(/\//g, "_");

export const fromBase64Url = base64 =>
  base64.replace(/-/g, "+").replace(/_/g, "/");

export default { encode };
