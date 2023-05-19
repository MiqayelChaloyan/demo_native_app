module.exports = {
  root: true,
  extends: '@react-native-community',
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    es6: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-console': 0,
    disallowMultipleVarDecl: 0,
    maximumLineLength: 100,
  },
};
