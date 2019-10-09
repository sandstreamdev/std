/* eslint-env browser, node */
export default duration =>
  new Promise(resolve => setTimeout(resolve, duration));
