import { romanNumberConvertor } from "../main/romanNumberConvertor";

describe('convert an integer to roman number', () => {
    it.each([
      [1, 'I'],
      [2, 'II'],
      [3, 'III']
    ])('should be %i for roman %s', (number: number, roman: string) => {
      expect(romanNumberConvertor(number)).toBe(roman);
    });
})

