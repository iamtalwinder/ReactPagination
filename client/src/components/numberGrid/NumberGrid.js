import React from "react";
import NumberCard from "../numberCard/NumberCard";
import "./NumberGrid.css";

function NumberGrid(props) {
	const handleScroll = (event) => {
		if (
			event.target.clientHeight + event.target.scrollTop >=
			event.target.scrollHeight - 20
		) {
			props.setPage(props.page + 1);
		}
	};
	return (
		<div className="numberGridContainer" onScroll={handleScroll}>
			{props.numbers.map((numberObj) => (
				<NumberCard key={numberObj.number} number={numberObj.number} />
			))}
		</div>
	);
}

export default NumberGrid;
