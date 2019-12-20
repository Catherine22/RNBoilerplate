module.exports = {
    root: true,
    env: {
        es6: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        rules: {
            'prettier/prettier': 'error',
            quotes: ['error', 'single'],
            indent: ['error', 4],
            semi: [1, 'always']
        }
    },
    parser: 'babel-eslint',
    extends: [
        'typescript',
        'typescript/react',
        'typescript/prettier',
        'typescript/prettier-react',
        'eslint:recommended',
        'plugin:react/recommended',
        '@react-native-community',
        'prettier',
        'prettier/react'
    ]
};
