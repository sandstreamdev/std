const merge = (...args): any => {
  const result: any = {};

  const merger = (object: any): any => {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const isObject: boolean =
          Object.prototype.toString.call(object[key]) === "[object Object]";

        if (isObject) {
          result[key] = merge(result[key], object[key]);
        } else {
          result[key] = object[key];
        }
      }
    }
  };

  for (let i: number = 0; i < args.length; i++) {
    merger(args[i]);
  }

  return result;
};

export default merge;
