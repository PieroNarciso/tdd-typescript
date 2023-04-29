export function passwordValidation(password: string): [boolean, string] {
  let messageError = "";
  let passwordValid = true;

  if (password.length < 8) {
    passwordValid = false;
    messageError += "Password must be at least 8 characters\n";
  }

  const numbersInPassword = password.match(/[\d]/g);
  if (!numbersInPassword || numbersInPassword.length < 2) {
    passwordValid = false;
    messageError += "Password must contain at least 2 number\n";
  }

  const capitalLetter = password.match(/[A-Z]/);
  if (!capitalLetter) {
    passwordValid = false;
    messageError += "Password must contain at least one capital letter\n";
  }

  const especialCharacter = password.match(/[\W]/);
  console.log("especialCharacter", especialCharacter)
  if (!especialCharacter) {
    passwordValid = false;
    messageError += "Password must contain at least one especial character\n";
  }

  messageError = messageError.trimEnd();

  return [passwordValid, messageError];
}
