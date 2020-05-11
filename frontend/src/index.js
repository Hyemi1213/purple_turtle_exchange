import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import App from 'pages/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'store';

import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(reducers, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() => {
	saveState({
		user: store.getState().user,
		notices: store.getState().notices
	});
}, 1000));


const render = Component =>
	ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('root'));

render(App);