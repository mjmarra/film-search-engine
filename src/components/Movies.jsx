import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";

export default function Movies({ filteredByRating, filteredByName }) {
	const isOnline = useIsOnline();

	if (filteredByName) {
		return filteredByName.map((movie) => {
			return (
				<div key={movie.id} className="col-md-4 col-lg-2">
					<Link to={`/pelicula/${movie.id}`}>
						<Movie movie={movie} />
					</Link>
				</div>
			);
		});
	} else {
		return filteredByRating.map((movie) => {
			return (
				<div key={movie.id} className="col-md-4 col-lg-2">
					<Link to={isOnline ? `/pelicula/${movie.id}` : "/"}>
						<Movie movie={movie} />
					</Link>
				</div>
			);
		});
	}
}
