import prevent from "./prevent";
import stop from "./stop";

export default (event: {
  preventDefault: () => void;
  stopPropagation: () => void;
}) => {
  prevent(event);
  stop(event);

  return false;
};
