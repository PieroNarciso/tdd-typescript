import { describe, expect, it } from "vitest";
import { PasswordHasher, User, EmailClient } from "./password-hash";

class MockPasswordHasher implements PasswordHasher {
  public hashPassword(password: string): string {
    return password;
  }
}

describe("User.validCredential", () => {
  it("should return true if the credentials are valid", () => {
    const emailClient = new EmailClient();
    const hasher = new MockPasswordHasher();
    const user = new User("test", "test", "test@gmail.com", hasher, emailClient);
    let result = user.areValidCredentials("test", "test");
    expect(result).toBe(true);
  });

  it("should return false if the credentials are invalid", () => {
    const emailClient = new EmailClient();
    const hasher = new MockPasswordHasher();
    const user = new User("test", "test", "test@gmail.com", hasher, emailClient);
    let result = user.areValidCredentials("test", "invalid");
    expect(result).toBe(false);
  });
});

describe("User.sendResetEmail", () => {
  it("should send an email to the user if the email of he user match", () => {
    const emailClient = new EmailClient();
    const hasher = new MockPasswordHasher();
    const user = new User("test", "test", "test@gmail.com", hasher, emailClient);
    expect(() => user.sendResetEmail("test@gmail.com")).not.toThrow();
  });

  it("should throw an error if the email of the user does not match", () => {
    const emailClient = new EmailClient();
    const hasher = new MockPasswordHasher();
    const user = new User("test", "test", "test@gmail.com", hasher, emailClient);
    expect(() => user.sendResetEmail("wrong@gmail.com")).toThrow();
  });
});
