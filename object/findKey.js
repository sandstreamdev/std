export default predicate => xs => (find(predicate)(xs) || [])[0];
