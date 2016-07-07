String.prototype.truncate = function (length) {
  if (this.length <= length) return this;
  return this.toString().substring(0, length) + '...';
};