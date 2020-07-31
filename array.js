const repeat = require('.')

Array.prototype.repeat = function (times) {
  return repeat(this, times)
}
