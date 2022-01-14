import {fizzbuzz} from "../main/fizzbuzz";

describe('Fizzbuzz', () => {
  it.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [5, "Buzz"],
    [6, "Fizz"],
  ])("takes %i and returns %s", (input: number, expected: string) => {
    expect(fizzbuzz(input)).toBe(expected);
  });
});
