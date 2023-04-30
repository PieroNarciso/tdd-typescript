export function validBrackets(input: string): "" | boolean {
  if (input === '') return '';
  const stack: string[] = [];
  for (const char of input) {
    if (char === '[') {
      stack.push(char);
    } else if (char === ']') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
