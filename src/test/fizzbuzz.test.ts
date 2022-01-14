import {fizzbuzz} from "../main/fizzbuzz";

describe('Fizzbuzz', () => {
  it.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [4, "4"],
    [5, "Buzz"],
    [6, "Fizz"],
    [7, "7"],
    [8, "8"],
    [9, "Fizz"],
    [10, "Buzz"], 
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
    [45, "FizzBuzz"],
    [100, "Buzz"]
  ])("takes %i and returns %s", (input: number, expected: string) => {
    expect(fizzbuzz(input)).toBe(expected);
  });
});
