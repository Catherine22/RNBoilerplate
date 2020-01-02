# RNBoilerplate

[![CircleCI](https://circleci.com/gh/Catherine22/RNBoilerplate.svg?style=svg)](https://circleci.com/gh/Catherine22/RNBoilerplate)

## ESLint and Prettier

1. add .eslintrc.js

```Javascript
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
```

2. add .prettierrc

```
{
    "printWidth": 100,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "none",
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "proseWrap": "never",
    "tabWidth": 4,P
    "jsxBracketSameLine": true
}
```

3. install ESLint and Prettier

```bash
yarn add babel-eslint
yarn add -D eslint prettier @react-native-community/eslint-config eslint-config-prettier eslint-config-typescript
```

4. install ESLint extention on Vistual Studio Code

[Link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

5. update Vistual Studio Code settings

Type `⌘` + `⇧` + `p` to open settings.json

```json
"eslint.validate": [
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "html",
        "autoFix": true
    },
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    }
],
"eslint.enable": true,
"eslint.alwaysShowStatus": true,
"eslint.autoFixOnSave": true,
"prettier.singleQuote": true,
"prettier.arrowParens": "always",
"prettier.tabWidth": 4,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

[vscode-settings.json]

6. Restart Vistual Studio Code

## Typescript

1. add .tsconfig.json

```json
{
    "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "isolatedModules": true,
        "jsx": "react",
        "lib": ["es6"],
        "moduleResolution": "node",
        "noEmit": true,
        "strict": true,
        "target": "esnext",

        // .json file imports
        "resolveJsonModule": true,

        // Path Aliases
        "baseUrl": ".",
        "paths": {
            "@": ["src/*"],
            "tests": ["tests/*"]
        }
    },
    "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

2. install dependencies

```bash
yarn add typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

3. eslint and prettier settings
    - install dev dependency: `yarn add -D eslint-config-typescript`
    - add typescript config in eslintrc.js

```Javascript
module.exports = {
    extends: [
        'prettier/@typescript-eslint'
    ]
};
```

4. rename `.js` files to `.ts` files. DO NOT change index.js (where your AppRegistry is called) or circleci may build failed
5. rename files with JSX elements to `.tsx` files

## Redux

1. install [react-native-debugger]
2. apply the extension in your project

```Javascript
const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

If you are using redux middleware (e.g. redux thunk or redux saga), your extension settings would be

```Javascript
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancer(applyMiddleware(ReduxThunk)));
```

3. open debugger

```bash
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

> This port is equal to metro bundler port

4. Switch to dark theme and restart the debugger

[Enable Dark Theme In Chrome DevTools]

5. Enable debug on your app

`⌘` + `D` => click `debug`

### Redux middleware

#### Redux Thunk vs. Redux Saga

[vscode-settings.json]: https://github.com/Catherine22/Front-end-warm-up/blob/master/vscode-settings.json
[react-native-debugger]: https://github.com/jhen0409/react-native-debugger

[Enable Dark Theme In Chrome DevTools] : https://developers.google.com/web/tools/chrome-devtools/customize/dark-theme
