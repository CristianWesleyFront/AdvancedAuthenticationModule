const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "react-hooks"
    ],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        "react/react-in-jsx-scope": "off",
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off',
        camelcase: 'off',
        '@typescript-eslint/ban-types': 'off',
        'no-use-before-define': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
        'import/extensions': 'off',
    },
    overrides: [
        {
          files: ['*/.ts?(x)'],
          rules: { 'prettier/prettier': ['warn', prettierOptions] },
        },
      ],
}
