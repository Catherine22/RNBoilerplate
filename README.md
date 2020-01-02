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

### Prerequisites

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

[Learn more](http://extension.remotedev.io/#12-advanced-store-setup)

3. open debugger

```bash
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

> This port is equal to metro bundler port

4. Switch to dark theme and restart the debugger

[Enable Dark Theme In Chrome DevTools]

5. Enable debug on your app

`⌘` + `D` => click `debug`

6. Install redux dependencies

```bash
yarn add @types/react-redux react-redux redux
```

#### Fundamentals

-   Actions

**What happened**

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.  
You will have one actionTypes file and many action files in the actions directory:

[ActionTypes.ts]: all types of actions will be defined here.

```Typescript
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
```

Action creators: functions that create actions.  
E.g. [Auth.ts]: all actions related authentication.

```Typescript
function emailChanged(email: string) {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
}
```

3. To automatically bind action creators to a `dispatch()`, you can use `bindActionCreators()`, we will talk about this later on.

[Learn more](https://redux.js.org/basics/actions)

-   Reducers

**Shape actions**

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

In this auth example, we want to store email and password. the initial state will be:

```Typescript
const initialState = {
    email: '',
    password: ''
};
```

The fomula to handle actions is `(previousState, action) => nextState`

```Typescript
function bypass(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case EMAIL_CHANGED:
            // update object by using ES6 spread operator
            return { ...state, email: action.payload };
        default:
            return state;
    }
}
```

A reducer example here: [Bypass.ts]

Since we have more reducers, we combine reducers

[index.ts]

```Typescript
import { combineReducers } from 'redux';
import { bypass } from './Bypass';

// combine all reducers here
const appReducers = combineReducers({
    bypass,
    // reducer2,
    // reducer3,
    // other reducers
});
export default appReducers;
```

[Learn more](https://redux.js.org/basics/reducers)

-   Store

The store has the following responsibilities:

1. Holds application state;
2. Allows access to state via `getState()`;
3. Allows state to be updated via `dispatch(action)`;
4. Registers listeners via `subscribe(listener)`;
5. Handles unregistering of listeners via the function returned by `subscribe(listener)`.

Create the store.

```Typescript
import { createStore } from 'redux';
const store = createStore(appReducers);
```

[Learn more](https://redux.js.org/basics/store)

-   React redux

1. `<Provider />`

The `<Provider />` makes the Redux store available to any nested components that have been wrapped in the `connect()` function.

[RootNavigator.tsx]

2. `conncet()`

React Redux provides a `connect` function for you to connect your component to the store.

[SignIn.tsx]

[Learn more](https://react-redux.js.org/)

### Redux middleware

It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

#### User-defined middleware

E.g. create a Logger middle to keep redux log

Logger.ts

```Typescript
const Logger = (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

export default Logger;
```

Apply the middleware

```Typescript
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancer(applyMiddleware(ReduxThunk, Logger)));
```

[Logger.ts]

[learn more](https://redux.js.org/advanced/middleware#seven-examples)

#### Aasynchronous data flow

Three popular redux middleware: redux-thunk, redux-promise and redux-saga to run asynchronous data flow in redux store.

-   Redux-thunk

1. Install redux-thunk

```bash
yarn add redux-thunk
```

2. Apply middleware

```Typescript
import ReduxThunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancer(applyMiddleware(ReduxThunk)));
```

[redux-thunk]

#### Explore more middlewares

You can use [redix-promise] or [redux-promise-middleware] to dispatch Promises instead of functions.  
You can use [redux-observable] to dispatch Observables.  
You can use the [redux-saga] middleware to build more complex asynchronous actions.  
You can use the [redux-pack] middleware to dispatch promise-based asynchronous actions.  
You can even write a custom middleware to describe calls to your API, like the real world example does.

[vscode-settings.json]: https://github.com/Catherine22/Front-end-warm-up/blob/master/vscode-settings.json
[react-native-debugger]: https://github.com/jhen0409/react-native-debugger
[enable dark theme in chrome devtools]: https://developers.google.com/web/tools/chrome-devtools/customize/dark-theme
[actiontypes.ts]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/actions/ActionTypes.ts
[auth.ts]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/actions/Auth.ts
[bypass.ts]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/reducers/Bypass.ts
[index.ts]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/reducers/index.ts
[rootnavigator.tsx]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/views/RootNavigator.tsx
[signin.tsx]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/views/auth/SignIn.tsx
[logger.ts]: https://github.com/Catherine22/RNBoilerplate/tree/master/src/middleware/Logger.ts
[redux-thunk]: https://github.com/reduxjs/redux-thunk
[redix-promise]: https://github.com/redux-utilities/redux-promise
[redux-promise-middleware]: https://github.com/pburtchaell/redux-promise-middleware
[redux-observable]: https://redux-observable.js.org/
[redux-saga]: https://redux-saga.js.org/
[redux-pack]: https://github.com/lelandrichardson/redux-pack
