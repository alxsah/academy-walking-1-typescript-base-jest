import {calculatePrimeFactors} from '../main/calculatePrimeFactors';

describe('calculatePrimeFactors', () => {
  it.each([
    [1, []],
    [2, [2]],
    [3, [3]],
    [4, [2, 2]]
  ])('for %i should return %s', (input, result) => {
    expect(calculatePrimeFactors(input)).toEqual(result);
  });
});
