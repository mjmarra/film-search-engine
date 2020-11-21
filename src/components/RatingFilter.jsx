import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import useAxios from "../hooks/useAxios";
import useIsOnline from "../hooks/useIsOnline";

export default function RatingFilter({ setFilteredByRating, pageNumber }) {
	const isOnline = useIsOnline();
	const [rate, setRate] = useState(0);

	const result = useAxios(
		`https://api.themoviedb.org/3/discover/movie?api_key=382e00f1a103ba0b4dc3e8330a8ce3e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&vote_average.gte=${
			rate * 2
		}`
	);

	// elimina warning
	useEffect(() => {
		result && setFilteredByRating(result);
	});

	return (
		<div className="mt-5 mb-2">
			<span className="mr-2">Filtrar por rating:</span>
			<Rating
				emptySymbol="far fa-star rating"
				fullSymbol="fas fa-star rating"
				onClick={(value) => (isOnline ? setRate(value) : setRate(0))}
				initialRating={rate}
			/>
		</div>
	);
}
