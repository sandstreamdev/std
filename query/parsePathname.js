const extractPath = url => {
  const match = url.match(/^(https?:)?\/\/[^/]*/);

  return match == null ? url : url.substring(match[0].length);
};

export default url => {
  let pathname = extractPath(url);
  let search = "";
  let hash = "";
  const hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  const searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === "") {
    pathname = "/";
  }

  return {
    pathname,
    search,
    hash
  };
};
