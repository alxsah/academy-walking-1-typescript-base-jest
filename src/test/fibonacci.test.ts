import { returnFibonacci, fibonacciIterative } from "../main/fibonacci";

describe('returnFibonacci', () => {
    it.each([
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8]
    ])('given position %i return %i as the fibonacci number', (position: number, fib: number) => {
      expect(fibonacciIterative(position)).toBe(fib);
    });
});
