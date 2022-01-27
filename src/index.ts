import { readFile, writeFile } from "fs/promises";
import { parseAccountNumbers } from "./utils";

const inputFile = "./infile.txt";
const outputFile = "./outFile.txt";

async function main() {
  const fileContents = await readFile(inputFile, {
    encoding: "utf8",
  });

  const accountNumberArrays = parseAccountNumbers(fileContents.split('\n'));

  await writeFile(outputFile, accountNumberArrays, { encoding: "utf8" });
}

main();
