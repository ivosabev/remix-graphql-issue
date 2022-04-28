const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {})

module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    ...a11yOff,
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      'argsIgnorePattern': '^_',
      'caughtErrors': 'none',
      'ignoreRestSiblings': true,
    }],
    '@typescript-eslint/no-use-before-define': 'off',
    "@typescript-eslint/return-await": ['error', 'in-try-catch'],
    'comma-dangle': ['warn', 'always-multiline'],
    'import/extensions': 'off',
    'import/no-cycle': ['error', {maxDepth: Infinity}],
    'import/no-internal-modules': 'error',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {order: 'asc', caseInsensitive: true},
        'newlines-between': 'never',
      }
    ],
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 140,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-alert': 'off', // TODO: Turn this on when we migrate the window.confirm calls
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-return-await': "off",
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'object-curly-spacing': ['error', 'never'],
    'prettier/prettier': 'error',
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically:false,
        reservedFirst: false,
      },
    ],
    'react/no-children-prop': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: false,
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': [2, {'caseSensitive': false}],
  },
};
