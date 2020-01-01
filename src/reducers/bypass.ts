import * as auth from '../actions/auth';

const initialState = {
    email: '',
    refreshToken: '',
    isLoggedIn: false,
    isNewUser: false
};

function bypass(state = initialState, action: any) {
    switch (action.type) {
        case auth.SIGN_IN:
            return Object.assign({}, state, {
                email: action.payload.email,
                refreshToken: action.payload.refreshToken,
                isLoggedIn: true,
                isNewUser: false
            });
        case auth.SIGN_UP:
            return Object.assign({}, state, {
                email: action.payload.email,
                refreshToken: action.payload.refreshToken,
                isLoggedIn: true,
                isNewUser: true
            });
        default:
            return state;
    }
}

export { bypass };
