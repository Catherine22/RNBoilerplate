import { combineReducers } from 'redux';
import { bypass } from './Bypass';
import { fetchAlbums } from './Albums';
import { fetchPosts } from './Posts';

const appReducers = combineReducers({
    bypass,
    fetchAlbums,
    fetchPosts
});
export default appReducers;
