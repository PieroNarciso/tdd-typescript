import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
  test("should return Fizz when n multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  test("should return Buzz when n multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test("should return FizzBuzz when n multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  test("should return n when n is not multiple of 3 or 5", () => {
    expect(fizzBuzz(0)).toBe("0");
    expect(fizzBuzz(2)).toBe("2");
  });
});
