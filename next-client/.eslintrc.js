module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // Add custom rules here
  },
};
