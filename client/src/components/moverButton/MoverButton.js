import React from "react";
import "./MoverButton";

function MoverButton(props) {
	if (props.move === "forward") return <li onClick={props.onClick}>&raquo;</li>;
	if (props.move === "backward")
		return <li onClick={props.onClick}>&laquo;</li>;
}

export default MoverButton;
