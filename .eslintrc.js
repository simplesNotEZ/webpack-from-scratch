module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue'],
  rules: {
    'comma-dangle': 0,
    semi: 0,
  },
  ignorePatterns: '/dist',
  env: {
    browser: true,
    node: true,
    // why do we need mocha?
    mocha: true,
    // instead of mocha, don't we need jest? I guess not. It works with below commented out ???
    // jest: true,
  },
  globals: {
    expect: true,
  },
};
