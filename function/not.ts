export default (f: (...xs: any[]) => any) => (...args: any[]) => !f(...args);
