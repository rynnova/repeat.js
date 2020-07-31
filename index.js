const range = require('./range')

module.exports = (items, times) =>
  range(1, Math.floor(times) || 0).flatMap(_ => items)
