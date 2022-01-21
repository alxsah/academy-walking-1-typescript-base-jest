import { returnFibonacci } from "../main/fibonacci";

describe('returnFibonacci', () => {
    it.each([
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 2]
    ])('given position %i return %i as the fibonacci number', (position: number, fib: number) => {
      expect(returnFibonacci(position)).toBe(fib);
    });
});
