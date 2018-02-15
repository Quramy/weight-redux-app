const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  extends: ['eslint-config-airbnb', 'prettier'],
  plugins: ['flow', 'prettier', 'react'],
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/anchor-is-valid': ignore,
    'jsx-a11y/click-events-have-key-events': ignore,
    'react/jsx-filename-extension': ignore,
  }
};
