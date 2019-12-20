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
        '@react-native-community',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ]
};
