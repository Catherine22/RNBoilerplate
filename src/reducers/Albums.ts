import { GET_ALBUMS, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/ActionTypes';

const initialState = {
    albums: null,
    error: null
};

function fetchData(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case GET_ALBUMS:
            return { ...state, albums: action.payload };
        case FETCH_DATA_SUCCESS:
            // we reset everything here
            return { ...state, ...initialState, albums: action.payload };
        case FETCH_DATA_FAIL:
            // reset albums
            return { ...state, error: action.payload, albums: '' };
        default:
            return state;
    }
}

export { fetchData };
