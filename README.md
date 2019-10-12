# do-nothing-script
Automate everything...or just use a checklist.

This script does nothing; it's an automated checklist.

## Getting started
```bash
npm install --save-dev do-nothing-script

npx do-nothing --file prompts.js
```

## Strings
Return an array of strings that are used in the checklist.

```js
// prompts.js
module.exports = [
    `1. Remember to add code (git add)`,
    `2. Remember to commit code (git commit)`,
    `3. Remember to push code (git push)`,
    `4. git paid`
];
```

## Expressions
You can use JavaScript expressions.

```js
// prompts.js
module.exports = [
    `1. Remember to add code (git add)`,
    `${1 + 1}. Remember to commit code (git commit)`,
    `3. Remember to push code (git push)`,
    `4. git paid ${Math.random()}`
];
```

## Functions
You can use functions that return a Promise.

```js
// prompts.js

const makeApiCall = function() {
    return fetch('https://SOME_AWESOME_API.com/json')
        .then(response => response.json())
        .then(data => {
            return `2: ${data}`;
        });
}

module.exports = [
    `1. Remember to add code (git add)`,
    makeApiCall
];
```

[Inspired by this HackerNews post](https://news.ycombinator.com/item?id=20495739)