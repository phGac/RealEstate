import { combineReducers } from 'redux';

import session from './session';
import searched from './search_searched';
import results from './search_results';

export default combineReducers({
    session,
    searched,
    results,
});