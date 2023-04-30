type Movement = {
  amount: number;
  balance: number;
};

export class Account {
  private movements: Movement[] = [];

  constructor(private balance: number) {}

  public deposit(amount: number): void {
    this.balance += amount;
    this.movements.push({ amount, balance: this.balance });
  }

  public withdraw(amount: number): void {
    this.balance -= amount;
    this.movements.push({ amount: -amount, balance: this.balance });
  }

  public getStatement(): Movement[] {
    return this.movements;
  }
}
