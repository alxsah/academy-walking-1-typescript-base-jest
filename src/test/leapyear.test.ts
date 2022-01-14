import {isLeapYear} from "../main/leapyear";

describe ("Leap Year", () => {
  it("For 1 should return false", () => {
    expect(isLeapYear(1)).toBe(false);
  });
  it("For 4 should return True", () => {
      expect(isLeapYear(4)).toBe(true);
  });
});
