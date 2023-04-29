export function add(numbers: string): number {
  let numbersSanitize: number[] = [];
  if (numbers === "") return 0;
  let customSeparator = "";
  // parse custom separator
  if (numbers.startsWith("//")) {
    const [customInputSeparator, input] = numbers.split("\n");
    customSeparator = customInputSeparator.slice(2);

    // sanitize input
    numbersSanitize = input.split(customSeparator).map((n, idx) => {
      const notNumber = n.match(/[^\d+|-\d+]/);
      if (notNumber) {
        throw new Error(
          `'${customSeparator}' expected but '${notNumber[0]
          }' found at position ${idx + 2}.`
        );
      }
      return parseInt(n);
    });
  }

  // Throw error if last char is a separator
  const lastChar = numbers[numbers.length - 1];
  if (lastChar === "," || lastChar === "\n") throw new Error("Invalid input");

  if (numbersSanitize.length === 0) {
    numbersSanitize = numbers.split(/[,|\n]/).map((n) => parseInt(n));
  }

  // Throw error if negative numbers
  const negativeNumbers = numbersSanitize.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  let sum = 0;
  for (const n of numbersSanitize) {
    if (n > 1000) continue
    sum += n;
  }
  return sum;
}
