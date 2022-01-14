export const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year !== 1800) {
    return true;
  }
  return false;
};
