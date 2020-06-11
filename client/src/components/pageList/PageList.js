import React, { useState } from "react";
import PageButton from "../pageButton/PageButton";
import MoverButton from "../moverButton/MoverButton";
import "./PageList.css";

function PageList(props) {
	const [startPoint, setStartPoint] = useState(1);
	const items = [];

	items.push(<MoverButton key={-1} move={"backward"} />);

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

	items.push(<MoverButton key={0} move={"forward"} />);

	return <ul className="pageList">{items}</ul>;
}

export default PageList;
