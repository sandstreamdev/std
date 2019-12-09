import prevent from "./prevent";
import stop from "./stop";

export default event => {
  prevent(event);
  stop(event);

  return false;
};
