import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import NumberGrid from "./components/numberGrid/NumberGrid";
import PageList from "./components/pageList/PageList";

function App() {
	const PER_PAGE = 6;
	const [pages, setPages] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	const [numbers, setNumbers] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				const resultDataCount = await axios.get("/api/user/dataCount");

				const startPoint = (page - 1) * PER_PAGE;
				const resultGetData = await axios.get(
					`api/user/getData/${startPoint}/${PER_PAGE}`
				);

				setPages(Math.ceil(resultDataCount.data.count / PER_PAGE));
				setNumbers(resultGetData.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setError(true);
			}
		}

		fetchData();
	}, [page]);

	if (error) return <p>Error</p>;
	if (loading) return <p>Loading..</p>;
	return (
		<Fragment>
			<NumberGrid numbers={numbers} />
			<PageList totalPages={pages} toShow={8} setPage={setPage} />
		</Fragment>
	);
}

export default App;
