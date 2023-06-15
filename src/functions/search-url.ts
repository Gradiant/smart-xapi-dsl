export function searchUrl(url: string, haystack: [], urlParts: string[]) {
  for (const key in haystack) {
    if (urlParts.includes(url)) {
      break;
    } else if (typeof haystack[key] === 'object') {
      urlParts.concat(searchUrl(url, haystack[key], urlParts));
      urlParts.push(key);
    } else {
      if (haystack[key] === url) {
        urlParts.push(key);
        urlParts.push(url);
        break;
      } else {
        urlParts.pop();
      }
    }
  }
  if (!urlParts.includes(url)) {
    urlParts = [];
  }
  return urlParts;
}
