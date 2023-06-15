import dsl from '@gradiant/xapi-dsl/dsl';
import { searchUrl } from './search-url';

export function shortenUrls(url: string) {
  if (url.includes('http')) {
    const array: string[] = [];
    const shortenUrlParts = searchUrl(url, JSON.parse(JSON.stringify(dsl, null, 2)), array);

    let shortenUrl: string = '';
    if (shortenUrlParts.length > 1) {
      const urlPosition = shortenUrlParts.indexOf(url);
      shortenUrlParts.splice(urlPosition, 1);
      shortenUrlParts.reverse();
      if (shortenUrlParts.includes('v1')) {
        shortenUrl =
          shortenUrlParts[shortenUrlParts.length - 3] +
          ':' +
          shortenUrlParts[shortenUrlParts.length - 2] +
          ':' +
          shortenUrlParts[shortenUrlParts.length - 1];
      } else {
        shortenUrl = shortenUrlParts[shortenUrlParts.length - 2] + ':' + shortenUrlParts[shortenUrlParts.length - 1];
      }
    }

    if (!shortenUrl || shortenUrl.length < 1) {
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
      if (urlParts[urlParts.length - 1].length > 1) {
        shortenUrl = urlPrefix + ':' + urlParts[urlParts.length - 1];
      } else {
        shortenUrl = urlPrefix;
      }
      return shortenUrl;
    } else {
      return shortenUrl;
    }
  } else {
    return url;
  }
}
