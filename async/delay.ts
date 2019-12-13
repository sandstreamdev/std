/* eslint-env browser, node */

export default (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration));
