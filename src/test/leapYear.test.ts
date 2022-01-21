import { isLeapYear } from '../main/leapYear';

describe('isLeapYear', () => {
  it.each([
    [1997, false],
    [1996, true],
    [1600, true],
    [1700, false],
    [2022, false],
    [1800, false],
    [2000, true],
    [2001, false]
  ])('should be %i for year %s', (year: number, result: boolean) => {
    expect(isLeapYear(year)).toBe(result);
  });
});
