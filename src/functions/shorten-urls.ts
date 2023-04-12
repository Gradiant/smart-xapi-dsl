export function shortenUrls(url: string) {
  if (!url.includes(':')) {
    const urlParts = url.split('/');
    const urlDomain = urlParts[2];
    const domainParts = urlDomain.split('.');
    let urlPrefix;
    if (domainParts[1].length > 4) {
      urlPrefix =
        domainParts[0].slice(0, 2) +
        domainParts[0].slice(2, domainParts[0].length - 1).replace(/[aeiou]/gi, '') +
        domainParts[1].slice(0, 2) +
        domainParts[1].slice(2, -1).replace(/[aeiou]/gi, '') +
        '.' +
        domainParts[2];
    } else {
      urlPrefix =
        domainParts[0].slice(0, 2) + domainParts[0].slice(2, domainParts[0].length - 1).replace(/[aeiou]/gi, '') + '.' + domainParts[1];
    }
    let shortenUrl;
    if (urlParts[urlParts.length - 1].length > 1) {
      shortenUrl = urlPrefix + ':' + urlParts[urlParts.length - 1];
    } else {
      shortenUrl = urlPrefix;
    }
    return shortenUrl;
  }
}
