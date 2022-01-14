import {isLeapYear} from "../main/leapyear";

describe ("Leap Year", () => {
  it.each([
    [1582, false],
    [1800, false],
    [1996, true],
    [2000, true],
    [2024, true],
    [1900, false]
  ])("for %i should return %s", (input: number, expected: boolean) => {
    expect(isLeapYear(input)).toBe(expected);
  })
});
