import { createDigitStringsFromLines, getNumberFromString, parseAccountNumbers } from ".";

const input =  [
  ' _  _  _  _  _  _  _  _  _ ',
  '| || || || || || || || || |',
  '|_||_||_||_||_||_||_||_||_|',
  '                           ',
  '                           ',
  '  |  |  |  |  |  |  |  |  |',
  '  |  |  |  |  |  |  |  |  |',
  '                           ',
];

describe('utils', () => {
  describe('parseAccountNumbers', () => {
    it('returns the correct structure of array', () => {
      const expected = '000000000\n111111111';

      const accountNumbersArray = parseAccountNumbers(input);
      expect(accountNumbersArray).toEqual(expected);
    });
  });
  
  describe('createDigitStringsFromLines', () => {
    it('decodes account number lines into an array of digits', () => {
      const input = [
        '    _  _     _  _  _  _  _ ',
        '  | _| _||_||_ |_   ||_||_|',
        '  ||_  _|  | _||_|  ||_| _|'
      ];
      const expected = [
        '   ' +
        '  |' +
        '  |',
        ' _ ' +
        ' _|' +
        '|_ ',
        ' _ ' +
        ' _|' +
        ' _|',
        '   ' +
        '|_|' +
        '  |',
        ' _ ' +
        '|_ ' +
        ' _|',
        ' _ ' +
        '|_ ' +
        '|_|',
        ' _ ' +
        '  |' +
        '  |',
        ' _ ' +
        '|_|' + 
        '|_|',
        ' _ ' +
        '|_|' +
        ' _|'
      ];

      const output = createDigitStringsFromLines(input);

      expect(output).toEqual(expected);
    });
  });

  describe('getNumberFromString', () => {
    const stringNumberMap = [
      [' _ | ||_|', 0],
      ['     |  |', 1],
      [' _  _||_ ', 2 ],
      [' _  _| _|', 3],
      ['   |_|  |', 4],
      [' _ |_  _|', 5],
      [' _ |_ |_|', 6],
      [' _   |  |', 7],
      [' _ |_||_|', 8],
      [' _ |_| _|', 9],
    ];

    it.each(stringNumberMap)('it returns the correct number for the string representation: %s = %d', (stringified: string, expected) => {
      expect(getNumberFromString(stringified)).toEqual(expected);
    });
  });
});