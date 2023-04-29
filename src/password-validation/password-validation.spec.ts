import { describe, expect, test } from "vitest";
import { passwordValidation } from "./password-validation";

describe("password validation", () => {
  test("password at least 8 characters", () => {
    expect(passwordValidation("12345678A!")).toEqual([true, ""]);
    expect(passwordValidation("12346A!")).toEqual([
      false,
      "Password must be at least 8 characters",
    ]);
  });

  test("password must contain at least two number", () => {
    expect(passwordValidation("12345678A!")).toEqual([true, ""]);
    expect(passwordValidation("PASSWORD!")).toEqual([
      false,
      "Password must contain at least 2 number",
    ]);
  });

  test("password must contain at least one capital letter", () => {
    expect(passwordValidation("12345678A*")).toEqual([true, ""]);
    expect(passwordValidation("12345678*a")).toEqual([
      false,
      "Password must contain at least one capital letter",
    ]);
  });

  test("password must contain at least one especial character", () => {
    expect(passwordValidation("12345678A!")).toEqual([true, ""]);
    expect(passwordValidation("12345678A")).toEqual([
      false,
      "Password must contain at least one especial character",
    ]);
  });

  test("password multiple validation", () => {
    expect(passwordValidation("asdfA")).toEqual([
      false,
      "Password must be at least 8 characters\nPassword must contain at least 2 number\nPassword must contain at least one especial character",
    ]);
  });
});
