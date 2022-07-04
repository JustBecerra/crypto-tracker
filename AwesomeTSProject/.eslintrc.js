module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-hooks/exhaustive-deps': 'no-warn',
      },
    },
  ],
};
