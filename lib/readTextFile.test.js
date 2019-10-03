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
  readFileSync: jest.fn(() => `1. How are you doing?
2. Did you remember to commit?
3. Did you remember to push?`
  )
}));
const readTextFile = require('./readTextFile');

it('should return array of text', () => {
  const result = readTextFile();

  expect(result.length).toEqual(3);
  expect(result).toMatchSnapshot();
});