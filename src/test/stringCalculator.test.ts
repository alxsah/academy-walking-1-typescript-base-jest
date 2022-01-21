import { returnSumOfString } from "../main/stringCalculator"

describe('returnSumOfString', () => {
    it.each([
        ["", 0],
        ["4", 4],
        ["8", 8],
        ["2,4", 6],
        ["1,2,4", 7]
    ])('for string %s the sum of number %i is returned', (numberString: string, numberValue: number) => {
        expect(returnSumOfString(numberString)).toBe(numberValue);
    })
});
