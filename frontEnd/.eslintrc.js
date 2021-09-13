module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  parser: 'babel-eslint',
  // add your custom rules here
  rules: {
    'vue/no-parsing-error': 'off',
  },
}
