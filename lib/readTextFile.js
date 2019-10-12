const path = require('path');
const argv = require('yargs')
  .alias('f', 'file')
  .demandOption(['file'])
  .describe('f', 'Path of text file')
  .argv;

function readTextFile() {
  const filepath = path.resolve('./', argv.file);

  return require(filepath);
}

module.exports = readTextFile;