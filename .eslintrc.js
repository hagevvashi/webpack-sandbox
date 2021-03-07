module.exports = {
  base: true,
  extends: ["prettier"],
  plugins: ["@typescript-eslint"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
  }
};
