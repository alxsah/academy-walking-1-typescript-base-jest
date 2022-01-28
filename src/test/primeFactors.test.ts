import {calculatePrimeFactors} from '../main/calculatePrimeFactors';

describe('calculatePrimeFactors', () => {
  it('should return [] for 1', () => {
    expect(calculatePrimeFactors(1)).toEqual([]);
  });
  it('should return [2] for 2', () => {
    expect(calculatePrimeFactors(2)).toEqual([2]);
  });   
  it('should return [3] for 3', () => {
    expect(calculatePrimeFactors(3)).toEqual([3]);
  });   
});
