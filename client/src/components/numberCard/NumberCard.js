import React from "react";
import "./NumberCard.css";

function NumberCard(props) {
	return (
		<div className="card">
			<div className="number">{props.number}</div>
		</div>
	);
}

export default NumberCard;
