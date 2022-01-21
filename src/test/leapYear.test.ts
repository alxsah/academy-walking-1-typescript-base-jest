import { isLeapYear } from '../main/leapYear';

describe('isLeapYear', () => {
  it.each([
    [1997, false],
    [1996, true],
    [1600, true]
  ])('should be %i for year %s', (year: number, result: boolean) => {
    expect(isLeapYear(year)).toBe(result);
  });
});
