import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/ActionTypes';

const initialState = {
    email: '',
    password: '',
    error: null,
    user: null
};

function bypass(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, error: '' };
        case LOGIN_USER_SUCCESS:
            // we reset everything here
            return { ...state, ...initialState, user: action.payload };
        case LOGIN_USER_FAIL:
            // reset password
            return { ...state, error: action.payload, password: '' };
        default:
            return state;
    }
}

export { bypass };
