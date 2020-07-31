const { expect } = require('chai')
require('../array')

describe('The Array prototype repeat method', () => {
  it('will do nothing with an empty array', () => {
    expect([].repeat(2)).to.be.empty
  })

  it('will repeat single item arrays as many times as listed', () => {
    expect([1].repeat(2)).to.deep.equal([1, 1])
  })

  it('will return an empty array for a number of times equal to zero', () => {
    expect([1].repeat(0)).to.be.empty
  })

  it('will return an empty array for times less than zero', () => {
    expect([1].repeat(-1)).to.be.empty
  })

  it('will return an empty array for fractional times', () => {
    expect([1].repeat(1/3)).to.be.empty
  })

  it('will return an empty array for NaN times', () => {
    expect([1].repeat(NaN)).to.be.empty
  })

  it('will return multiple item arrays as many times as listed', () => {
    const repeated = [1, 3, 'a', 1, 3, 'a', 1, 3, 'a', 1, 3, 'a']
    expect([1, 3, 'a'].repeat(4)).to.deep.equal(repeated)
  })

  it('will return the empty array for repeating with a string value', () => {
    expect([1].repeat('a')).to.be.empty
  })

  it('will return the empty array for repeating with an object', () => {
    expect([1].repeat({})).to.be.empty
  })
})

