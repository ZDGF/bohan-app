import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';

export default class App extends Component{
	render(){
		return (
			<HashRouter>
				<Switch>
					<Route path = "/home" component = {Home} /> 
					<Route path = '/Login' component = {Login} />
					<Redirect from = '/' to = '/home'/>
					<Route path = "*" component = {NoMatch} />
				</Switch>
			</HashRouter>
		)
	}
}

