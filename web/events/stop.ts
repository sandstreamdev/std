export default (event: { stopPropagation: () => void }) => {
  event.stopPropagation();

  return false;
};
