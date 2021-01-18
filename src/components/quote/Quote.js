import React from 'react';
import './Quote.css';

import Button from '../customButton/customButton';
import Loader from '../loader/loader';

const Quote = (props) => {
	console.log(props);
	if (props.quoteText === undefined) return <Loader />;
	return (
		<div className="quote-container">
			<div className="quote-text">
				<i className="fas fa-quote-left" />
				<span id="quote">{props.quoteText}</span>
			</div>
			<div className="quote-author">
				<span id="author">{props.quoteAuthor}</span>
			</div>
			<div className="button-container">
				<Button clicked={props.twitterQuote}>
					<i className="fab fa-twitter" />
				</Button>
				<Button clicked={props.changeQuote}>New Quote</Button>
			</div>
		</div>
	);
};

export default Quote;
