/* eslint-env browser */

export default (f, wait) => {
let timeout;

return (...args) => {
const resolve = () => {
timeout = null;

f(...args);
};

clearTimeout(timeout);

timeout = setTimeout(resolve, wait);
};
};
