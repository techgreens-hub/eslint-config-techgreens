module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-unused-vars": [
      2,
      {
        args: "after-used",
        argsIgnorePattern: "^_"
      }
    ],
    "no-console": "warn",
    "no-inline-comments": "error",
    "no-var": "error",
    "arrow-body-style": ["error", "as-needed"],
    "prefer-const": "error",
    "prettier/prettier": [
      "error",
      {
        useTabs: true,
        singleQuote: true
      }
    ]
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019
  },
  globals: {}
};
