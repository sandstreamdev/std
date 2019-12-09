export default predicate => action => (...args) => {
if (predicate(...args)) {
return action(...args);
}
};
