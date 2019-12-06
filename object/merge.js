import isObject from "../is/object.js";

export const merge = (a, b) => {
  if (isObject(a) && isObject(b)) {
    Object.keys(b).forEach(key => {
      if (isObject(b[key])) {
        if (!a[key]) {
          Object.assign(a, { [key]: {} });
        }

        merge(a[key], b[key]);
      } else {
        Object.assign(a, { [key]: b[key] });
      }
    });
  }

  return a;
};
