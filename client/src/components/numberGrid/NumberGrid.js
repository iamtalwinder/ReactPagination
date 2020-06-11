import React from "react";
import NumberCard from "../numberCard/NumberCard";
import "./NumberGrid.css";

function NumberGrid(props) {
	return (
		<div className="numberGridContainer">
			{props.numbers.map((number) => (
				<NumberCard number={number} />
			))}
		</div>
	);
}

export default NumberGrid;
