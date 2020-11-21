import React, { useState } from "react";
import "../App.css";
import Movies from "./Movies";
import RatingFilter from "./RatingFilter";
import Pagination from "./Pagination";
import useIsOnline from "../hooks/useIsOnline";
import Header from "./Header";

export default function Home() {
	const [pageNumber, setPageNumber] = useState(1);
	const [filteredByRating, setFilteredByRating] = useState([]);

	const isOnline = useIsOnline();

	return (
		<div className="App">
			<Header />
			<RatingFilter
				pageNumber={pageNumber}
				setFilteredByRating={setFilteredByRating}
			/>
			<div className="main-wrapper">
				<div className="row">
					<Movies filteredByRating={filteredByRating} />
					{filteredByRating.length === 0 && (
						<div className="alert alert-danger mt-5" role="alert">
							Ninguna película coincide con su búsqueda
						</div>
					)}
				</div>
				{isOnline && (
					<Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
				)}
			</div>
		</div>
	);
}
