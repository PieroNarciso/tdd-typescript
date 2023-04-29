import { describe, expect, test } from "vitest";
import { add } from "./string-calculator";

describe("StringCalculator", () => {
  test("should sum empty string to 0", () => {
    expect(add("")).toBe(0);
  });

  test("should sum single number to itself", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test("should sum two numbers separated by comma", () => {
    expect(add("1,2")).toBe(3);
    expect(add("5,6")).toBe(11);
  });

  test("shold sum n numbers separated by comma", () => {
    expect(add("1,2,3,5")).toBe(11);
  });

  test("should separete numbers by new line", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should not accept separator at the end", () => {
    expect(() => add("1,2,")).toThrowError();
    expect(() => add("1\n2\n")).toThrowError();
  });

  test("should accept custom separator", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//|\n1|2|3")).toBe(6);
    expect(add("//sep\n2sep3")).toBe(5);
    expect(() => add("//|\n1|2,3")).toThrowError(
      "'|' expected but ',' found at position 3."
    );
  });

  test("should not allow negative numbers", () => {
    expect(() => add("-1,2,-3")).toThrowError("Negatives not allowed: -1,-3");
    expect(() => add("//;\n-1;-3")).toThrowError("Negatives not allowed: -1,-3");
  });

  test("should ignore numbers bigger than 1000", () => {
    expect(add("1001,2")).toBe(2);
    expect(add("1000,2")).toBe(1002);
    expect(add("//;\n1001;2")).toBe(2);
  })
});
