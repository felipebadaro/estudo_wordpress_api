import React, { Component } from 'react';
import BookItem from "./BookItem";
import axios from 'axios';

export class Books extends Component{
	state = {
		books: [],
		isLoaded: false
	}

	componentDidMount(){
		axios.get('/wp-json/wp/v2/books')
		.then(res => this.setState({
			books: res.data,
			isLoaded: true
		}))
		.catch(err => console.log(err));
	}

	render(){
		const {books, isLoaded} = this.state;

		if(isLoaded){
			return(
				<div>
				{books.map(book => (
					<BookItem key={book.id} book={book}></BookItem>
					))}
				</div>
				)
		}

		return (
			<div>
			<h4>Carregando...</h4>
			</div>
			)
	}
}

export default Books;