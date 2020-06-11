import React, { useState, useEffect } from "react";
import PageButton from "../pageButton/PageButton";
import MoverButton from "../moverButton/MoverButton";
import "./PageList.css";

const moveForward = () => {
	const toActive = document.getElementsByClassName("active")[0].nextSibling;
	console.log(toActive);
	if (!toActive) {
		toActive.click();
	}
};

const moveBackward = () => {
	const toActive = document.getElementsByClassName("active")[0].previousSibling;
	if (!toActive) {
		toActive.click();
	}
};

function PageList(props) {
	const [startPoint, setStartPoint] = useState(1);
	const items = [];

	useEffect(() => {
		if (!document.getElementsByClassName("active").length) {
			const firstPage = document.getElementsByClassName("pageList")[0]
				.children[1];
			firstPage.className += " active";
		}
	}, []);

	items.push(<MoverButton key={-1} move={"backward"} onClick={moveBackward} />);

	for (let pageNumber = startPoint; pageNumber < startPoint + 7; pageNumber++) {
		items.push(
			<PageButton
				key={pageNumber}
				pageNumber={pageNumber}
				setStartPoint={setStartPoint}
				totalPages={props.totalPages}
			/>
		);
	}

	items.push(<MoverButton key={0} move={"forward"} onClick={moveForward} />);

	return <ul className="pageList">{items}</ul>;
}

export default PageList;
