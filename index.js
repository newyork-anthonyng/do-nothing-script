const readTextFile = require('./lib/readTextFile');
const question = require('./lib/question');

(async () => {
  const textArray = readTextFile();

  for (let i = 0; i < textArray.length; i++) {
    const current = textArray[i];

    if (typeof current === 'string') {
      await question(textArray[i]);
    } else if (typeof current === 'function') {
      const text = await current();
      await question(text);
    }
    
  }

  process.exit(0);
})();