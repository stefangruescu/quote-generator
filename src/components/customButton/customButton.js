import React from 'react';
import './customButton.css';

const customButton = (props) => {
	return (
		<div className="button-container">
			<button className="custom-button" onClick={props.clicked}>
				{props.children}
			</button>
		</div>
	);
};

export default customButton;
