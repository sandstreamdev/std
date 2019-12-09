export default event => {
event.stopPropagation();

return false;
};
