import {combineReducers} from 'redux';
import quotesReducer from './quotes_reducer.js';
import filterReducer from './filter_reducer.js';

const rootReducer = combineReducers({
	quotes: quotesReducer,
	filter: filterReducer
});

export default rootReducer;