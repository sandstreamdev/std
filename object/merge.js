const merge = (...args) => {
  const target = {};

  const merger = object => {
    for (const key in object) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key)) {
        if (Object.prototype.toString.call(object[key]) === "[object Object]") {
          target[key] = merge(target[key], object[key]);
        } else {
          target[key] = object[key];
        }
      }
    }
  };

  for (let i = 0; i < args.length; i++) {
    merger(args[i]);
  }

  return target;
};

export default merge;
