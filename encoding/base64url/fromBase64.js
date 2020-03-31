export default base64 =>
  base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
