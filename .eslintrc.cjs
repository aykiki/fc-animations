module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@rc-foundation/eslint-config-rc',
    '@rc-foundation/eslint-config-rc/unicorn',
    '@rc-foundation/eslint-config-rc/fsd-import'

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
