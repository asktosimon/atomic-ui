module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  parserOptions: {
    "project": "./tsconfig.json"
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', '.storybook/**/*.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": "error",
    'react/function-component-definition': 'off',
    "no-restricted-exports": "off"
  },
}
