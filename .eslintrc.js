module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'quote-props': 'off',
    'global-require': 'off',
    'max-len': 'off',
    'class-methods-use-this': 'warn',
    'camelcase': 'off',
    'quotes': ['warn', 'single', 'avoid-escape'],
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'radix': ['warn', 'as-needed'],
    'no-nested-ternary': 'off',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],
    'no-restricted-globals': 'off',
    'object-curly-newline': [
      'warn',
      {
        consistent: true,
      },
    ],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/sort-comp': [
      'warn',
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off', // this is way too obtrusive
  },
};
