/**
 * Limit length of string
 * 
 * @param length
 * @returns {*}
 */
String.prototype.truncate = function (length) {
  if (this.length <= length) return this;
  return this.toString().substring(0, length) + '...';
};

/**
 * Extract full domain from url
 * 
 * @returns {*}
 */
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

/**
 * Extract real domain from subdomain
 * 
 * @returns {*}
 */
String.prototype.extractRealDomain = function () {
  // Check if domain is valid
  if (this.indexOf('.') === -1 || this.indexOf('.') === this.length - 1) return false;
  
  let fullParts = this.split('.');
  let length = fullParts.length;
  return `${fullParts[length - 2]}.${fullParts[length - 1]}`;
};