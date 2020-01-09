export default (base64Url: string) =>
  base64Url.replace(/-/g, "+").replace(/_/g, "/");
