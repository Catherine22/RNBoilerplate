import * as types from '../constants/ActionTypes';

const signIn = (code: string) => ({ type: types.SIGN_IN, payload: code });

export { signIn };
