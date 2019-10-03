const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(text) {
  return new Promise(resolve => {
    rlInterface.question(`${text}: [Press ENTER to continue]`, resolve);
  });
}

module.exports = question;