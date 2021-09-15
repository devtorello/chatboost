module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/contracts/**.ts',
    '!<rootDir>/src/**/contracts/**',
    '!<rootDir>/src/errors/**',
    '!<rootDir>/src/helpers/**',
    '!<rootDir>/src/mocks/**',
    '!<rootDir>/src/entities/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
