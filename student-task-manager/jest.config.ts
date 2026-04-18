import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom', // Explicitly use the full name
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  // This ensures Jest doesn't try to parse CSS or Images as JS
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
}

export default createJestConfig(config)