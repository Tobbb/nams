module.exports = {
  root: true,
  extends: ['@react-native', 'eslint:recommended'],
  plugins: ['@typescript-eslint', 'react-native'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    semi: 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
}
