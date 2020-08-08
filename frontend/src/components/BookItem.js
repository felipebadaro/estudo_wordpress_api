import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BookItem extends Component {

	state = {
		imgUrl: '',
		author: '',
		idLoaded: false
	}

	static propTypes = {
		book: PropTypes.object.isRequired
	}

	
	componentDidMount(){
		const {featured_media, author} = this.props.book;
		const getImageUrl = axios.get('/wp-json/wp/v2/media/' + featured_media);
		const getAuthor = axios.get('/wp-json/wp/v2/users/' + author);

		Promise.all([getImageUrl, getAuthor]).then(res => {
			console.log(res);
			this.setState(
			{
				imgUrl: res[0].data.media_details.sizes.full.source_url,
				author: res[1].data.name,
				isLoaded: true
			}
			);
		}
		);
	}


	render(){	

		const {id, title, excerpt} = this.props.book;
		const {author, imgUrl, isLoaded} = this.state;

		if(isLoaded){

			return (
				<div>
				<h2>{title.rendered}</h2>
				<small>Review por {author}</small>
				<img src={ imgUrl } style={{width: '100%'}} />
				<p dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p>
				<Link to={`/book/${id}`}>Leia o review </Link>
				</div>
				);
		}

		return null;
	}
}

export default BookItem;
