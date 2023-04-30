import { describe, expect, it } from "vitest";
import { Account } from "./banking";

describe("Account.printStatement", () => {
  it("should return empty statement when account is empty", () => {
    const account = new Account(100);
    expect(account.getStatement()).toEqual([]);
  });

  it("should return statement with one deposit", () => {
    const account = new Account(100);
    account.deposit(100);
    expect(account.getStatement()).toEqual([{ amount: 100, balance: 200 }]);
  });

  it("should return statement with one withdraw", () => {
    const account = new Account(100);
    account.withdraw(100);
    expect(account.getStatement()).toEqual([{ amount: -100, balance: 0 }]);
  });

  it("should return statement with multiple deposits", () => {
    const account = new Account(100);
    account.deposit(100);
    account.deposit(100);
    expect(account.getStatement()).toEqual([
      { amount: 100, balance: 200 },
      { amount: 100, balance: 300 },
    ]);
  });
});
