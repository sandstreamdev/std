export default name => {
  // eslint-disable-next-line
  const forbiddenCharacters = /[<>:"\/\\|?*\x00-\x1F]/g;
  const forbiddenNames = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
  return !forbiddenCharacters.test(name) && !forbiddenNames.test(name);
};
