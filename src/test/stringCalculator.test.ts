import { returnSumOfString } from "../main/stringCalculator"

describe('returnSumOfString', () => {
  it("for an empty string the ouput is 0", () => {
      expect(returnSumOfString("")).toBe(0);
  });
  it("for a single number should return that number", () => {
    expect(returnSumOfString("4")).toBe(4);
  });
  it("for another number should also return that number", () => {
    expect(returnSumOfString("8")).toBe(8);
  });
});
