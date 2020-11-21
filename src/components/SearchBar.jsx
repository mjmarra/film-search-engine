import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import useIsOnline from "../hooks/useIsOnline";

export default function SearchBar({
	setFilteredByName,
	pageNumber,
	setSearch,
	search,
}) {
	const isOnline = useIsOnline();
	const result = useAxios(
		`https://api.themoviedb.org/3/search/movie?api_key=382e00f1a103ba0b4dc3e8330a8ce3e0&language=en-US&query=${search}&page=${pageNumber}&include_adult=false`
	);

	// elimina warning
	useEffect(() => {
		result && setFilteredByName(result);
	});

	return (
		<div className="form-group">
			<label htmlFor="input-movie" className="text-light font-weight-bold">
				Buscador
			</label>
			<input
				id="input-movie"
				onChange={(e) => {
					isOnline ? setSearch(e.target.value) : setSearch("");
				}}
				type="text"
				className="form-control"
				placeholder="Ingresar título de una película..."
				autoComplete="off"
			/>
		</div>
	);
}
