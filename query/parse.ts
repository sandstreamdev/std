import fromEntries from "../object/fromEntries";
import startsWith from "../string/startsWith";

const startsWithQuestionMark = startsWith("?");

const queryFromMaybeSearchString = (x: string) =>
  startsWithQuestionMark(x) ? x.substring(1) : x;

export default (xs = "") =>
  fromEntries(
    queryFromMaybeSearchString(xs)
      .split("&")
      .filter(Boolean)
      .map(xs => {
        const [key, value] = xs.split("=");

        return [key, value !== undefined ? decodeURIComponent(value) : true];
      })
  );
