module.exports = {
  'testEnvironment': 'jsdom',
  'setupFilesAfterEnv': [
    '<rootDir>/src/__test__/setupTests.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__test__/__mocks__/fileMock.js',
    '\\.(css|less|styl)$': '<rootDir>/src/__test__/__mocks__/styleMock.js',
  },
};
