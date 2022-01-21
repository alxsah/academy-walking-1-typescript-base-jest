import { isLeapYear } from '../main/leapYear';

describe('isLeapYear', () => {
  it('should be false for year 1997', () => {
    expect(isLeapYear(1997)).toBe(false);   
  });
  it('should be true for year 1996', () => {
    expect(isLeapYear(1996)).toBe(true);   
  });
});
