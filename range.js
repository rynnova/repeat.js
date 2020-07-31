const range = (start, end) =>
  start > end ? [] : [start, ...range(start + 1, end)]

module.exports = range
