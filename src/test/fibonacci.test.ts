import { returnFibonacci } from "../main/fibonacci";

describe('returnFibonacci', () => {
    it("given position n return the fibonacci number", () => {
        expect(returnFibonacci(0)).toBe(0);
    })     
  });