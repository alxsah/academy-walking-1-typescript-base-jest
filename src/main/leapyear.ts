export const isLeapYear = (year: number): boolean => {
  if (isDivisibleBy(year, 4) && isDivisibleBy(year, 100) && isDivisibleBy(year, 400)) {
      return true;
  } else if (isDivisibleBy(year, 4) && isDivisibleBy(year, 100)) {
      return false;
  } else if (isDivisibleBy(year, 4)) {
    return true;
  }
  return false;
};

const isDivisibleBy = (dividend: number, divisor: number) => dividend % divisor === 0;
