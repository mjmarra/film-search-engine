import React from "react";
import "./Movie.css";

export default function Movie({ movie }) {
	return (
		<div className="card-wrapper shadow">
			{movie.poster_path === null ? (
				<div className="title-color">
					<small>{movie.title}</small>
					<img
						src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Grey_background.jpg`}
						className="img-fluid"
						alt="Card"
					/>
				</div>
			) : (
				<img
					src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
					className="img-fluid"
					alt="Card"
				/>
			)}
		</div>
	);
}
