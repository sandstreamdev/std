export const implementation = (entries: [string, any][]): object =>
  entries.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export default (entries: [string, any][]): object =>
  Object.fromEntries ? Object.fromEntries(entries) : implementation(entries);
