/*
 * Copyright 2020 Ryan Y.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

