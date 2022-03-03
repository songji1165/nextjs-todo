module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/quotes" : ["error", "double"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-ally/control-has-associated-label": "off",
    "react/no-array-index-key": "off",
    "comma-dangle": "off",
    "arrow-body-style":  "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off"

  },
};
