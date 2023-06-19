module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    es6: true,
    presets: ['@babel/preset-env'],
    sourceType: 'module',
    ecmaFeatures: {
      js: true,
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native', 'prettier', 'react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-console': 0,
    disallowMultipleVarDecl: 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
