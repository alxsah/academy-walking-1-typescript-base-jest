import {calculatePrimeFactors} from '../main/calculatePrimeFactors';

describe('calculatePrimeFactors', () => {
  it('should return [] for 1', () => {
    expect(calculatePrimeFactors(1)).toBe([]);
  });
});
