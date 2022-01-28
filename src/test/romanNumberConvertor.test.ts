import { romanNumberConvertor } from "../main/romanNumberConvertor";

describe('convert an integer to roman number', () => {
    it("an integer of 1 returns 'I'", () => {
        expect(romanNumberConvertor(1)).toBe('I');
    })
    it("an integer of 2 returns 'II'", () => {
      expect(romanNumberConvertor(2)).toBe('II');
    })
})

