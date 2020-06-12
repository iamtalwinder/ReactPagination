import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberGrid from "./components/numberGrid/NumberGrid";

function App() {
	const PER_PAGE = 10;
	const [page, setPage] = useState(1);
	const [numbers, setNumbers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const result = await axios.get(
					`/api/user/getData/${(page - 1) * 10}/${PER_PAGE}`
				);
				setNumbers([...numbers, ...result.data]);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, [page]);

	return <NumberGrid numbers={numbers} page={page} setPage={setPage} />;
}

export default App;
