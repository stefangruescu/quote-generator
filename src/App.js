import Index from './containers/index/Index';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [ quote, setQuote ] = useState('');
	const [ quoteData, setQuoteData ] = useState([]);
	useEffect(() => {
		axios.get('https://type.fit/api/quotes').then((response) => {
			setQuote(response.data[Math.floor(Math.random() * 1500)]);
			setQuoteData(response.data);
		});
	}, []);
	const changeQuote = (quoteData) => {
		setQuote(quoteData[Math.floor(Math.random() * 1500)]);
	};
	const twitterQuote = (quote) => {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
		window.open(twitterUrl, '_blank');
	};
	return (
		<div className="App">
			<Index
				quote={quote.text}
				author={quote.author}
				changeQuote={() => changeQuote(quoteData)}
				twitterQuote={() => twitterQuote(quote)}
			/>
		</div>
	);
}

export default App;
