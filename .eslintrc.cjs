module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin-import/errors',
    'plugin:eslint-plugin-import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: { 'no-unused-vars': 'error' },
};
