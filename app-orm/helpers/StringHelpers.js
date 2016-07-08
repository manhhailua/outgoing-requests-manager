String.prototype.truncate = function (length) {
  if (this.length <= length) return this;
  return this.toString().substring(0, length) + '...';
};

String.prototype.extractDomain = function () {
  let domain;

  // find & remove protocol (http, ftp, etc.) and get domain
  if (this.indexOf("://") > -1) {
    domain = this.split('/')[2];
  } else {
    domain = this.split('/')[0];
  }

  // find & remove port number
  domain = domain.split(':')[0];

  return domain;
};