import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import ArticleList from './ArticleList'
import history from './history';
import Add from './Add'

class App extends Component {
	render() {
		return (
			<Router history={history}>
			<Switch>
				<Route path="/add" component={Add} />
				<Route path="/" component={ArticleList} /> 
			</Switch>	
			</Router>
		)
	}
}

export default App;

