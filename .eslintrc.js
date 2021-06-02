module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": ['./tsconfig.json'],
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    'prettier'
  ],
  "rules": {
    'prettier/prettier': 'error',
  }
};
