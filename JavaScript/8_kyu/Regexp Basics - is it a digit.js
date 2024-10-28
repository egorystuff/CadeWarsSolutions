// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function () {
  if (this.match(/^[0-9]$/)) return true;
  return false;
};
