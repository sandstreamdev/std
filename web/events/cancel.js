import prevent from "./prevent.js";
import stop from "./stop.js";

export default event => {
  prevent(event);
  stop(event);

  return false;
};
