import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route} from 'react-router';
//import browserHistory from 'history/browserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,document.getElementById('root'));
registerServiceWorker();
