import { describe, expect, it } from "vitest";
import { trimString } from "./end-of-line";

describe("end-of-line", () => {
  it("should remove whitespace at the end of a line", () => {
    const input = "Hello World!   \nHello World!   \nHello World!   ";
    const output = "Hello World!   \nHello World!   \nHello World!";
    expect(trimString(input)).toBe(output); 
  })

  it("should remove tabs at the end of a line", () => {
    const input = "Hello World!\t\t\t\nHello World!\t\t\t\nHello World!\t\t";
    const output = "Hello World!\t\t\t\nHello World!\t\t\t\nHello World!";
    expect(trimString(input)).toBe(output); 
  });

  it("should not remove whitespace at the beginning of a line", () => {
    const input = "   Hello World!\n   Hello World!\n   Hello World!";
    const output = "   Hello World!\n   Hello World!\n   Hello World!";
    expect(trimString(input)).toBe(output); 
  });
});
