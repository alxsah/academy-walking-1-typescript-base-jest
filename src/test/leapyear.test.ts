import {isLeapYear} from "../main/leapyear";

describe ("Leap Year", () => {
  it("For 1582 should return false", () => {
    expect(isLeapYear(1582)).toBe(false);
  });
  it("For 1996 should return True", () => {
      expect(isLeapYear(1996)).toBe(true);
  });
  it("For 2024 should return True", () => {
    expect(isLeapYear(2024)).toBe(true);
  });
});
