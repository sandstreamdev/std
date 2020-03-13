export const implementation = entries =>
  entries.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export default entries =>
  Object.fromEntries ? Object.fromEntries(entries) : implementation(entries);
