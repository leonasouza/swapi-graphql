import { describe, expect, it } from 'vitest'

import { sum } from './sum'

describe('function sum', () => {
  it('should sum the numbers passed as arguments', () => {
    const a = 1
    const b = 3
    const expectedResult = 4

    expect(sum(a, b)).toBe(expectedResult)
  })

  it('sums two numbers and the result should not be 5', () => {
    const a = 1
    const b = 3
    const wrongResult = 5

    expect(sum(a, b)).not.toBe(wrongResult)
  })
})
