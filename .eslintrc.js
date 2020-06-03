module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.test.json'],
    tsconfigRootDir: __dirname,
  },
};
