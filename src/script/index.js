// using an ES6 transpiler
require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';
import '../style/app.less';

const render = (Component) => {
  ReactDOM.render(
	  <AppContainer>
	    <Component />
	  </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
	module.hot.accept('./app', () => {
	  render(App)
	});
}

