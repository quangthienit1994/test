'use strict'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect, hashHistory, IndexRoute  } from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import Admin from './views/Admin'
ReactDOM.render(
    <BrowserRouter>
		<browserHistory>
			<Route path="/index" component = { () => <p>Hose</p> } />
			<Route path="/admin" component = {Admin} />
		</browserHistory>
	</BrowserRouter>,
    document.getElementById("root")
)