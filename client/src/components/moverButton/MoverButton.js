import React from "react";
import "./MoverButton";

function MoverButton(props) {
	if (props.move === "forward") return <li>&raquo;</li>;
	if (props.move === "backward") return <li>&laquo;</li>;
}

export default MoverButton;
