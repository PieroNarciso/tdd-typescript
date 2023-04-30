import crypto from 'crypto';

export interface PasswordHasher {
  hashPassword(password: string): string;
}

export class PasswordSHA256Hasher implements PasswordHasher {
  public hashPassword(password: string): string {
    const algo = crypto.createHash("sha256");
    return algo.update(password).digest("hex");
  }
}

export interface ResetEmailSender {
  send(email: string): void;
}

export class EmailClient implements ResetEmailSender {
  public send(email: string): void {
    // send email
    console.log("sending email:", email)
  }
}

export class User {
  constructor(
    private username: string,
    private password: string,
    private email: string,
    private hasher: PasswordHasher,
    private emailSender: ResetEmailSender
  ) { }

  public areValidCredentials(username: string, password: string): boolean {
    if (username === this.username) {
      const hashedPassword = this.hasher.hashPassword(password);
      return hashedPassword === this.password;
    }
    return false;
  }

  public sendResetEmail(email: string): void {
    if (email !== this.email) {
      throw new Error("Invalid email");
    }
    this.emailSender.send(email);
  }
}
