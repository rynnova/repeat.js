const { expect } = require('chai')
const repeat = require('..')

describe('The repeat function', () => {
  it('will do nothing with an empty array', () => {
    expect(repeat([], 2)).to.be.empty
  })

  it('will repeat single item arrays as many times as listed', () => {
    expect(repeat([1], 2)).to.deep.equal([1, 1])
  })

  it('will return an empty array for a number of times equal to zero', () => {
    expect(repeat([1], 0)).to.be.empty
  })

  it('will return an empty array for times less than zero', () => {
    expect(repeat([1], -1)).to.be.empty
  })

  it('will return an empty array for fractional times', () => {
    expect(repeat([1], 1/3)).to.be.empty
  })

  it('will return an empty array for NaN times', () => {
    expect(repeat([1], NaN)).to.be.empty
  })

  it('will return multiple item arrays as many times as listed', () => {
    const repeated = [1, 3, 'a', 1, 3, 'a', 1, 3, 'a', 1, 3, 'a']
    expect(repeat([1, 3, 'a'], 4)).to.deep.equal(repeated)
  })

  it('will return the empty array for repeating with a string value', () => {
    expect(repeat([1], 'a')).to.be.empty
  })

  it('will return the empty array for repeating with an object', () => {
    expect(repeat([1], {})).to.be.empty
  })
})
