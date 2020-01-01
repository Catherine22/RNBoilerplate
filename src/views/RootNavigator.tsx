import React, { FC } from 'react';
import AuthNavigator from './auth/AuthNavigator';
import { createStore } from 'redux';
import appReducers from '../reducers';
import { signIn } from '../actions/auth';

type Props = {};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(appReducers);
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(signIn('test1@gmail.com', '123456'));
unsubscribe();

const RootNavigator: FC<Props> = props => {
    return <AuthNavigator />;
};

export default RootNavigator;
