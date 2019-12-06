import isObject from "../is/object.js";

const merge = (a: any, b: any): any => {
  if (isObject(a) && isObject(b)) {
    Object.keys(b).forEach((key: string) => {
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

export default merge;
