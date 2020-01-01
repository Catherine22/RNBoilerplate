/*
 * action types
 */
const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';

/*
 * action creators
 */
function signIn(email: string, password: string) {
    return {
        type: SIGN_IN,
        payload: {
            email,
            password
        }
    };
}

function signUp(email: string, password: string) {
    return {
        type: SIGN_IN,
        payload: {
            email,
            password
        }
    };
}

export { SIGN_IN, SIGN_UP, signIn, signUp };
