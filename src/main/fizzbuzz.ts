export const fizzbuzz = (num: number) => {
  if (num === 3) {
    return "Fizz";
  } else if (num === 5) {
    return "Buzz";
  }
  return num.toString();
};
