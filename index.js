const readTextFile = require('./lib/readTextFile');
const question = require('./lib/question');

(async () => {
  const textArray = readTextFile();

  for (let i = 0; i < textArray.length; i++) {
    await question(textArray[i]);
  }

  process.exit(0);
})();