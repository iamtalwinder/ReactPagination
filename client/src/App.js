import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberGrid from "./components/numberGrid/NumberGrid";

function App() {
	// const [pages, setPages] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(false);

	// useEffect(async () => {
	// 	try {
	// 		const result = await axios.get("/api/user/dataCount");
	// 		setPages(Math.ceil(result.data.count / 10));
	// 		setLoading(false);
	// 	} catch (err) {
	// 		console.log(err);
	// 		setError(true);
	// 	}
	// }, []);

	// if (loading) return <p>Loading..</p>;
	// if (error) return <p>Error</p>;
	return <NumberGrid numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />;
}

export default App;
