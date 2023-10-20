// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  transform: {
    // '^.+\\.ts?$': 'ts-jest',
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
};
