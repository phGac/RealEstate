import { combineReducers } from 'redux';

import session from './session';
import search from './search';
import results from './search_results';

export default combineReducers({
    session,
    search,
    results,
});