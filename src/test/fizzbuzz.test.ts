import {fizzbuzz} from "../main/fizzbuzz";

describe('Fizzbuzz', () => {
  it("takes 1 and returns 1", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
});
