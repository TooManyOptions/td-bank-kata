const LINES_PER_ACCOUNT_NUMBER = 4;
const NUMBER_WIDTH = 3;
const BLANK_SPACE_LINE_AMOUNT = 1;

export function parseAccountNumbers(input: string[]) {
  const parsedAccountNumbers = [];
  for (let index = 0; index < input.length; index += LINES_PER_ACCOUNT_NUMBER) {
    const accountNumberLines = input.slice(index, index + (LINES_PER_ACCOUNT_NUMBER - BLANK_SPACE_LINE_AMOUNT));
    const stringifiedAccountNumber = createDigitStringsFromLines(accountNumberLines);
    const accountNumber = stringifiedAccountNumber
      .map(getNumberFromString)
      .join('');

    parsedAccountNumbers.push(accountNumber);
  }

  return parsedAccountNumbers.join('\n');
}

export function createDigitStringsFromLines(lines: string[]) {
  const stringifiedAccountNumber = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split('');
    
    for (let j = 0; j < line.length; j += NUMBER_WIDTH) {
      const digitPosition = j / NUMBER_WIDTH;
      const numberPartial = line.slice(j, j + NUMBER_WIDTH).join('');
      stringifiedAccountNumber[digitPosition] = stringifiedAccountNumber[digitPosition] 
        ? stringifiedAccountNumber[digitPosition] + numberPartial 
        : numberPartial;
    }
  }

  return stringifiedAccountNumber;
}

export function getNumberFromString(input: string) {
  const stringToNumberMap = {
    ' _ | ||_|': 0,
    '     |  |': 1,
    ' _  _||_ ': 2, 
    ' _  _| _|': 3, 
    '   |_|  |': 4, 
    ' _ |_  _|': 5, 
    ' _ |_ |_|': 6, 
    ' _   |  |': 7, 
    ' _ |_||_|': 8, 
    ' _ |_| _|': 9
  };

  return stringToNumberMap[input];
}