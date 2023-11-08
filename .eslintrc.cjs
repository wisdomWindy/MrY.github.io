/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    "browser": true,
    "node": true,
    "es2024": true,
    "vue3": true
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
