const readline = jest.genMockFromModule('readline');

const mockInterface = {
    question: jest.fn()
};
function createInterface() {
  return mockInterface;
}

readline.createInterface = createInterface;
readline.__interface = mockInterface;
module.exports = readline;