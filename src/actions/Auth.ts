import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './ActionTypes';
import * as firebase from 'firebase/app';
import 'firebase/auth';

/*
 * action creators
 */
function emailChanged(email: string) {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
}

function passwordChanged(password: string) {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
}

const loginUserSuccess = (dispatch: any, user: any) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = (dispatch: any, error: any) => {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });
};

const signUp = (user: { email: string; password: string }) => {
    return (dispatch: any) => {
        dispatch({ type: LOGIN_USER });
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                console.log('success', result);
                loginUserSuccess(dispatch, result.user);
            })
            .catch(error => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.warn('sign up error', errorCode, errorMessage);
                loginUserFail(dispatch, error);
            });
    };
};

const signIn = (user: { email: string; password: string }) => {
    return (dispatch: any) => {
        dispatch({ type: LOGIN_USER });
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                console.log('success', result);
                loginUserSuccess(dispatch, result.user);
            })
            .catch(error => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.warn('sign in error', errorCode, errorMessage);
                loginUserFail(dispatch, error);
            });
    };
};

export { emailChanged, passwordChanged, signIn, signUp };
