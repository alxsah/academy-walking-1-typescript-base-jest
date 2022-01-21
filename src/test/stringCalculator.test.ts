import { returnSumOfString } from "../main/stringCalculator"

describe('returnSumOfString', () => {
    it("for an empty string the ouput is 0", () => {
        expect(returnSumOfString("")).toBe(0);
    })
}) 
