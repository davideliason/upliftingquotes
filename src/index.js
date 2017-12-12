import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './container/AppContainer';
import {applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer.js';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk,logger));


ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
