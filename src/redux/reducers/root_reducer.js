import {combineReducers} from 'redux';
import quotesReducer from './quotes_reducer.js';

const rootReducer = combineReducers({
	quotes: quotesReducer
});

export default rootReducer;