import React from "react";
import "./PageButton.css";

function PageButton(props) {
	const handlePageButtonClick = (number, event) => {
		const currentActive = document.getElementsByClassName("active");
		if (currentActive.length) {
			currentActive[0].className = "pageButton";
		}
		event.target.className += " active";

		if (number > 4 && number <= props.totalPages - 3) {
			props.setStartPoint(number - 3);
		} else if (number <= 4) {
			props.setStartPoint(1);
		} else {
			let overflow = number + 3 - props.totalPages;
			props.setStartPoint(number - 3 - overflow);
		}
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
