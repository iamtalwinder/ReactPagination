import React from "react";
import "./PageButton.css";

function PageButton(props) {
	const handlePageButtonClick = (number, event) => {
		const currentActive = document.getElementsByClassName("active")[0];
		currentActive.className = "pageButton";
		event.target.className += " active";

		const gap = Math.floor(props.toShow / 2);

		if (number > gap + 1 && number <= props.totalPages - gap) {
			props.setStartPoint(number - gap);
		} else if (number <= gap + 1) {
			props.setStartPoint(1);
		} else {
			let overflow = number + gap - props.totalPages;
			if (props.toShow % 2 === 0) overflow--;
			props.setStartPoint(number - gap - overflow);
		}
		props.setPage(number);
	};
	return (
		<li
			className="pageButton"
			onClick={(event) => handlePageButtonClick(props.pageNumber, event)}
		>
			{props.pageNumber}
		</li>
	);
}

export default PageButton;
