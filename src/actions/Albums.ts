import { GET_ALBUMS, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/ActionTypes';
import { DOMAIN, PATH } from '../constants/Constants';
import { DEFAULT_HEADERS, GET } from '../services/HttpClient';

const fetchDataSuccess = async (dispatch: any, payload: any) => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload });
};

const fetchDataFail = (dispatch: any, error: any) => {
    dispatch({ type: FETCH_DATA_FAIL, payload: error });
};

// ES2017 style
function getAlbums() {
    return async (dispatch: any) => {
        dispatch({ type: GET_ALBUMS });
        try {
            const response = await fetch(`${DOMAIN}${PATH.ALBUMS}`, {
                method: GET,
                headers: DEFAULT_HEADERS
            });
            if (response.ok && response.status === 200) {
                let responseJson = await response.json();
                fetchDataSuccess(dispatch, responseJson);
            } else {
                fetchDataFail(dispatch, null);
            }
        } catch (error) {
            fetchDataFail(dispatch, error);
        }
    };
}

export { getAlbums };
