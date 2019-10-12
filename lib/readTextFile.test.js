jest.mock('yargs', () => {
  const self = {};
  self.alias = () => self;
  self.demandOption = () => self;
  self.describe = () => self;
  self.argv = {
    file: './lib/__mocks__/someFile.js'
  };

  return self;
});

const readTextFile = require('./readTextFile');

it('should return file correct file', () => {
  const result = readTextFile();

  expect(result.length).toEqual(4);
  expect(result).toMatchSnapshot();
});