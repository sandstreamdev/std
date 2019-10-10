import debounce from "./debounce";
import delay from "./delay";
import sequence from "./sequence";

export { debounce, delay, sequence };
declare const _default: {
  debounce: (f: any, wait: any) => (...args: any[]) => void;
  delay: (duration: any) => Promise<unknown>;
  sequence: (tasks: any) => Promise<any>;
};

export default _default;
