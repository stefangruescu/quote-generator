import './Index.css';
import React from 'react';

import Quote from '../../components/quote/Quote';

const Index = (props) => {
	console.log(props);
	return (
		<div className="main">
			<Quote
				quoteText={props.quote}
				quoteAuthor={props.author}
				changeQuote={props.changeQuote}
				twitterQuote={props.twitterQuote}
			/>
		</div>
	);
};

export default Index;
