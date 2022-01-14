export const isLeapYear = (year: number): boolean => {
  const divisibleBy4 = isDivisibleBy(year, 4);
  const divisibleBy400 =isDivisibleBy(year, 400); 
  if (divisibleBy4 && divisibleBy400) {
      return true;
  } else if (divisibleBy4 && isDivisibleBy(year, 100)) {
      return false;
  } else if (divisibleBy4) {
    return true;
  }
  return false;
};

const isDivisibleBy = (dividend: number, divisor: number) => dividend % divisor === 0;
