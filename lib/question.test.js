jest.mock('readline');
const readline = require('readline');
const question = require('./question');

it('should return Promise', () => {
  const result = question('Hello World');
  expect(typeof result.then).toEqual('function');
});

it('should call readline.interface.question', () => {
  readline.__interface.question.mockClear();
  question('Hello World');

  expect(readline.__interface.question).toHaveBeenCalledTimes(1);
});