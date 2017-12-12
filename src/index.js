import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import {applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/root_reducer.js';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk,logger));
console.log(store.getState());

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
