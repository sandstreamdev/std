export default key => xs =>
xs ? Object.prototype.hasOwnProperty.call(xs, key) : false;
