export default Object.entries ||
  (object => Object.keys(object).map(key => [key, object[key]]));
