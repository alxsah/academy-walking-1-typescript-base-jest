import { romanNumberConvertor } from "../main/romanNumberConvertor";

describe('convert an integer to roman number', () => {
    it.each([
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [6, 'VI']
    ])('should be %i for roman %s', (number: number, roman: string) => {
      expect(romanNumberConvertor(number)).toBe(roman);
    });
})

