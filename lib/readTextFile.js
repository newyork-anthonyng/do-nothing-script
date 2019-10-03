const fs = require('fs');
const path = require('path');
const argv = require('yargs')
  .alias('f', 'file')
  .demandOption(['file'])
  .describe('f', 'Path of text file')
  .argv;

function readTextFile() {
  const text = fs.readFileSync(path.resolve(argv.file), 'utf8');
  return text.split('\n');
}

module.exports = readTextFile;