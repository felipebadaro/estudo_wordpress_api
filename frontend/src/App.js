import React, { Component, Fragment } from 'react';
import Books from "./components/Books";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BookPage from "./components/BookPage";

class App extends Component {
	render(){		
		return (
			<Router>
			<Fragment>
				<Route exact path="/" component={Books} />
				<Route exact path="/book/:id" component={BookPage} />
			</Fragment>
			</Router>
			);
		}
	}

	export default App;
