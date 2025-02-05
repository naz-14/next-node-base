/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
testMatch:["**/tests/**/*.test.ts"],
moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
