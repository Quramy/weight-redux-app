const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  extends: ['eslint-config-airbnb', 'prettier'],
  plugins: ['flowtype', 'prettier', 'react'],
  parser: 'babel-eslint',
  rules: {
    'no-undef': error,
    'flowtype/define-flow-type': 1,
    'import/prefer-default-export': ignore,
    'jsx-a11y/anchor-is-valid': ignore,
    'jsx-a11y/click-events-have-key-events': ignore,
    'react/jsx-filename-extension': ignore,
  }
};
