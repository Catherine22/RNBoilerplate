import { combineReducers } from 'redux';
import { bypass } from './Bypass';
import { fetchData } from './Albums';

const appReducers = combineReducers({
    bypass,
    fetchData
});
export default appReducers;
