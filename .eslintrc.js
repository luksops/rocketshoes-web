module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'no-console': ['error', { allow: ['tron'] }],
    'operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': [0],
    'object-curly-newline': [0],
  },
};
