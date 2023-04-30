import { describe, expect, it } from "vitest";
import { validBrackets } from "./balanced-brackets";

describe("Balanced brackets", () => {
  it('Should return "" if string is empty', () => {
    expect(validBrackets("")).toBe("");
  });

  it("Should return true if string is balanced", () => {
    expect(validBrackets("[]")).toBe(true);
    expect(validBrackets("[][][]")).toBe(true);
    expect(validBrackets("[[]]")).toBe(true);
    expect(validBrackets("[][[[]][]][]")).toBe(true);
  });

  it("Should return false if string is not balanced", () => {
    expect(validBrackets("][]")).toBe(false);
    expect(validBrackets("[][")).toBe(false);
    expect(validBrackets("[[")).toBe(false);
    expect(validBrackets("[]]")).toBe(false);
  });
});
