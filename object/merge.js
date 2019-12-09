import isObject from "../is/object.js";

const merge = (...args) => {
  const target = {};

  const merger = object => {
    for (const key in object) {
      if (isObject(object[key])) {
        target[key] = merge(target[key], object[key]);
      } else {
        target[key] = object[key];
      }
    }
  };

  for (let i = 0; i < args.length; i++) {
    merger(args[i]);
  }

  return target;
};

export default merge;
