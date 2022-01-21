import { isLeapYear } from '../main/leapYear';

describe('isLeapYear', () => {
  it('should be false for year 1997', () => {
    expect(isLeapYear(1997)).toBe(false);
  });
});
