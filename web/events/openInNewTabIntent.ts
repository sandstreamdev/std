export default ({ button, ctrlKey, metaKey, shiftKey }) =>
  Boolean(ctrlKey || shiftKey || metaKey || button === 1);
