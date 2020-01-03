import { GET_POSTS, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/ActionTypes';

const initialState = {
    posts: null,
    error: null
};

function fetchPosts(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.payload };
        case FETCH_DATA_SUCCESS:
            // we reset everything here
            return { ...state, ...initialState, posts: action.payload };
        case FETCH_DATA_FAIL:
            // reset posts
            return { ...state, error: action.payload, posts: '' };
        default:
            return state;
    }
}

export { fetchPosts };
