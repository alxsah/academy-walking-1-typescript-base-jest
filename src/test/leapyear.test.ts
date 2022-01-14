import {isLeapYear} from "../main/leapyear";

describe ("Leap Year", () => {
  it.each([
    [1582, false],
  ])("for 1582 should return false", (input: number, expected: boolean) => {
    expect(isLeapYear(input)).toBe(expected);
  }) 
  it("For 1800 should return false", () => {
    expect(isLeapYear(1800)).toBe(false);
  });
  it("For 1996 should return True", () => {
      expect(isLeapYear(1996)).toBe(true);
  });
  it("For 2000 should return True", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  it("For 2024 should return True", () => {
    expect(isLeapYear(2024)).toBe(true);
  });
  it("For 1900 should return True", () => {
    expect(isLeapYear(1900)).toBe(false);
  });
});
