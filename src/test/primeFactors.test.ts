import {calculatePrimeFactors} from '../main/calculatePrimeFactors';

describe('calculatePrimeFactors', () => {
  it('should return [] for 1', () => {
    expect(calculatePrimeFactors(1)).toEqual([]);
  });
  it('should return [2] for 2', () => {
    expect(calculatePrimeFactors(2)).toEqual([2]);
  });    
});
