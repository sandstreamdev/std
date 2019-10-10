import cancel from "./cancel";
import openInNewTabIntent from "./openInNewTabIntent";
import prevent from "./prevent";
import stop from "./stop";

export { cancel, openInNewTabIntent, prevent, stop };
declare const _default: {
  cancel: (event: any) => boolean;
  openInNewTabIntent: ({
    button,
    ctrlKey,
    metaKey,
    shiftKey
  }: {
    button: any;
    ctrlKey: any;
    metaKey: any;
    shiftKey: any;
  }) => any;
  prevent: (event: any) => boolean;
  stop: (event: any) => boolean;
};

export default _default;
