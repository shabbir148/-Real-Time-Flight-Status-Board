module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Optional for setting up testing utilities
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // For CSS modules
  },
};
