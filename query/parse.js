import fromEntries from "../object/fromEntries.js";
import startsWith from "../string/startsWith.js";

const startsWithQuestionMark = startsWith("?");

const queryFromMaybeSearchString = x =>
  startsWithQuestionMark(x) ? x.substring(1) : x;

export default (xs = "") =>
  fromEntries(
    queryFromMaybeSearchString(xs)
      .split("&")
      .map(xs => {
        const [key, value] = xs.split("=");
        return [key, value !== undefined ? decodeURIComponent(value) : true];
      })
  );
