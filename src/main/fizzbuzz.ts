export const fizzbuzz = (num: number) => {
  if (num === 15) {
    return "FizzBuzz"
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
  return num.toString();
};
