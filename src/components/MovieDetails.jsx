import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function MovieDetails() {
	const [selectedMovie, setSelectedMovie] = useState("");
	const [loading, setLoading] = useState(true);
	// tb se podría acceder con 'match.params.id' recibiendo match en el componente como prop
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=382e00f1a103ba0b4dc3e8330a8ce3e0&language=en-US`
			)
			.then((response) => {
				setSelectedMovie(response.data);
				setLoading(false);
			});
	}, [id]);

	return (
		<div>
			<Header />
			{loading ? (
				<div className="text-center mt-5">
					<div className="spinner-border" role="status">
						<span className="sr-only">Cargando...</span>
					</div>
				</div>
			) : selectedMovie ? (
				<div className="container my-5">
					<div className="row">
						<div className="col-md-4">
							{selectedMovie.poster_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w780${selectedMovie.poster_path}`}
									className="img-fluid"
									alt="Poster"
								/>
							) : (
								<img
									src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Grey_background.jpg`}
									className="img-fluid"
									alt="Poster"
								/>
							)}
						</div>
						<div className="col-md-8">
							<div className="card-body pt-md-0 ">
								<h5 className="card-title">{selectedMovie.title}</h5>
								<p className="card-text">
									Rating: {selectedMovie.vote_average}
								</p>
								<small className="text-muted">
									Fecha de lanzamiento: {selectedMovie.release_date}
								</small>
								<p className="pt-4 pr-3"> {selectedMovie.overview}</p>
								<a href="/" className="btn btn-outline-secondary btn-film-link">
									Volver a inicio
								</a>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="container pt-5">
					<div className="alert alert-danger mt-5" role="alert">
						Ninguna película coincide con su búsqueda
					</div>
				</div>
			)}
		</div>
	);
}
