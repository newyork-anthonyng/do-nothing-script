// jest.genMockFromModule('yargs');
jest.mock('yargs', () => {
  const self = {};
  self.alias = () => self;
  self.demandOption = () => self;
  self.describe = () => self;
  self.argv = {
    file: 'someFileName.txt'
  };

  return self;
});

jest.mock('fs', () => ({
  readFileSync: jest.fn(() => '')
}));
const fs = require('fs');
const readTextFile = require('./readTextFile');

it('should return array of text', () => {
  fs.readFileSync.mockImplementation(() => `1. How are you doing?
2. Did you remember to commit?
3. Did you remember to push?`);
  const result = readTextFile();

  expect(result.length).toEqual(3);
  expect(result).toMatchSnapshot();
});

it('should ignore blank text', () => {
  fs.readFileSync.mockImplementation(() => `1. How are you doing?
2. Did you remember to commit?
3. Did you remember to push?

`);
  const result = readTextFile();

  expect(result.length).toEqual(3);
  expect(result).toMatchSnapshot();
});